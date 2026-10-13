(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Mystical Agriculture");
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing Mystical Agriculture recipes");

    GTT0.removeByOutput(event, "Mystical Agriculture", [
      "mysticalagriculture:prosperity_shard",
      "mysticalagriculture:prudentium_furnace",
      "mysticalagriculture:turtium_furnace",
      "mysticalagriculture:imperium_furnace",
      "mysticalagriculture:supremium_furnace",
      "mysticalagriculture:awakend_supremium_furnace",
    ]);
  }

  function add(event) {
    console.log("GTT0: Adding Mystical Agriculture recipes");
    event.recipes.gtceu
      .forge_hammer("danburite_to_prosperity_shards")
      .itemInputs("gtceu:danburite_gem")
      .itemOutputs("4x mysticalagriculture:prosperity_shard")
      .duration(100)
      .EUt(20);
  }
})();
