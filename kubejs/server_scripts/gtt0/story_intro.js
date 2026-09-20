PlayerEvents.loggedIn((event) => {
  const player = event.player;

  if (!player.persistentData.getBoolean("did_start")) {
    player.persistentData.putBoolean("did_start", true);
    event.server.runCommandSilent(`gamemode adventure ${player.username}`);
    player.give(Item.of("kubejs:intake_form"));

    player.server.scheduleInTicks(60, () => {
      player.tell(
        Text.of(player.name.string + ": ")
          .color("aqua")
          .append("I've finished my forms, I should go return them.")
          .color("gray"),
      );
    });
  }
});

ItemEvents.rightClicked((event) => {
  const { item, player, server } = event;

  if (item.id !== "kubejs:intake_slip") return;

  // Prevents the slip from being auto right clicked when given from jailer.
  const dt = server.ticks - player.persistentData.getLong("slip_given_at");
  if (dt >= 0 && dt < 120) return;

  if (player.persistentData.getBoolean("right_click_busy")) return;

  if (!player.isCrouching()) return;

  player.persistentData.putBoolean("right_click_busy", true);

  console.log("GTT0: Processing intake slip for a player...");

  player.tell(
    Text.of("Finding a place to send you... ")
      .color("aqua")
      .append("This item may take a few seconds to react, dont panic.")
      .color("gray"),
  );

  const oldX = player.x;
  const oldY = player.y;
  const oldZ = player.z;

  server.runCommandSilent(
    `execute in minecraft:overworld run spreadplayers 0 0 100 3000 false ${player.username}`,
  );

  if (!player.isCreative()) {
    item.shrink(1);
  }

  // Wait for spreadplayers to actually move the player.
  waitForTeleport(server, player, oldX, oldY, oldZ);

  event.cancel();
});

function waitForTeleport(server, player, oldX, oldY, oldZ, waited) {
  const moved = player.x !== oldX || player.y !== oldY || player.z !== oldZ;

  if (waited == null) {
    waited = 0;
  }

  if (moved) {
    finishIntake(player);
    return;
  }

  // 60 seconds maximum
  if (waited >= 1200) {
    console.log(`GTT0: spreadplayers timed out for ${player.username}`);

    player.tell(
      Text.of("The intake transfer failed. Please try again.").color("red"),
    );

    player.give("kubejs:intake_slip");

    player.persistentData.putBoolean("right_click_busy", false);
    return;
  }

  server.scheduleInTicks(40, () => {
    waitForTeleport(server, player, oldX, oldY, oldZ, waited + 5);
  });
}

function finishIntake(player) {
  console.log(`GTT0: ${player.username} has been transferred.`);

  server.runCommandSilent(`gamemode survival ${player.username}`);

  player.server.scheduleInTicks(60, () => {
    player.server.runCommandSilent(
      "playsound minecraft:block.beacon.activate master " +
        player.username +
        " " +
        player.x +
        " " +
        player.y +
        " " +
        player.z +
        " 0.4 1.6",
    );
  });

  const lines = [
    [
      40,
      Text.of("[ARBITER TERMINAL — INTAKE RECORD]").color("gold").bold(true),
    ],

    [60, Text.of("――――――――――――――――――――――――――――――").color("dark_gray")],

    [
      80,
      Text.of("Inmate ")
        .color("white")
        .append(Text.of(player.name.string).color("yellow"))
        .append(Text.of(", your intake has been processed.").color("white")),
    ],

    [
      100,
      Text.of("Inmate ID is ")
        .color("white")
        .append(
          Text.of(
            "INMATE-" +
              getRandomInt().toString() +
              getRandomInt().toString() +
              getRandomInt().toString() +
              getRandomInt().toString(),
          ).color("yellow"),
        ),
    ],

    [
      120,
      Text.of("Sentencing classification: ")
        .color("white")
        .append(Text.of("TIER ZERO").color("red").bold(true)),
    ],

    [
      140,
      Text.of("Tier Zero is considered the lowest classification. Good luck.")
        .color("gray")
        .italic(true),
    ],

    [
      160,
      Text.of('Discharge can be achieved by completing: "')
        .color("gray")
        .italic(true),
    ],

    [180, Text.of("THE PROJECT").color("gold").bold(true)],

    [200, Text.of('".').color("gray")],

    [220, Text.of("— ARBITER, Site Overseer").color("dark_gray").italic(true)],

    [240, Text.of("――――――――――――――――――――――――――――――").color("dark_gray")],

    [
      260,
      Text.of("Tip: ")
        .color("aqua")
        .bold(true)
        .append(
          Text.of(
            "Open your quest book with (`) to review your path to restitution.",
          )
            .color("aqua")
            .bold(false),
        ),
    ],
  ];

  lines.forEach(([delay, msg]) => {
    player.server.scheduleInTicks(delay + 1, () => {
      player.tell(msg);
    });
  });

  player.persistentData.putBoolean("right_click_busy", false);
}

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
