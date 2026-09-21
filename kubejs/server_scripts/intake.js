ItemEvents.entityInteracted("kubejs:intake_form", (event) => {
  if (event.target.type != "minecraft:zombie_villager") return;

  const player = event.player;
  const server = event.server;

  if (player.persistentData.getBoolean("intake_busy")) return;
  player.persistentData.putBoolean("intake_busy", true);
  event.item.count--;

  const lines = [
    [
      10,
      Text.of("THE JAILER:")
        .color("red")
        .bold(true)
        .underlined(true)
        .append(
          Text.of(" Form received. Please hold.")
            .color("white")
            .bold(false)
            .underlined(false),
        ),
    ],
    [
      200,
      Text.of("THE JAILER:")
        .color("red")
        .bold(true)
        .underlined(true)
        .append(
          Text.of(" Processing your intake...")
            .color("white")
            .bold(false)
            .underlined(false),
        ),
    ],
    [
      280,
      Text.of("THE JAILER:")
        .color("red")
        .bold(true)
        .underlined(true)
        .append(
          Text.of(
            " Alright, your ready. Once you crouch and right click your slip, you will be teleported for your sentence. If you have fellow prisoners, you can /tpa to them. Move along.",
          )
            .color("white")
            .bold(false)
            .underlined(false),
        ),
    ],
  ];

  console.log("GTT0: Showing messages for player, giving item...");

  lines.forEach(([delay, msg]) => {
    server.scheduleInTicks(delay + 1, () => {
      event.target.playSound("minecraft:entity.villager.yes");
      player.tell(msg);
    });
  });

  server.scheduleInTicks(280, () => {
    player.give("kubejs:intake_slip");
    player.persistentData.putLong("slip_given_at", server.ticks);
  });

  event.cancel();
});
