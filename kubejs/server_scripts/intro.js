const GTT0 = global.GTT0;

ItemEvents.firstRightClicked("kubejs:info_tablet", (event) => {
  const player = event.player;

  if (player.persistentData.getBoolean("intro_seen")) return;

  GTT0.log(
    "Intro",
    player.displayName.getString() + " has right clicked intro item",
  );

  server.runCommandSilent(
    "execute in minecraft:overworld run openguiscreen intro " +
      player.displayName.getString(),
  );
});

PlayerEvents.loggedIn((event) => {
  const player = event.player;

  if (player.persistentData.getBoolean("got_intro")) return;

  player.persistentData.putBoolean("got_intro", true);
  player.give(Item.of("kubejs:info_tablet"));
});
