(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing Mystical Agriculture recipes");

    event.remove({ output: "mysticalagriculture:prosperity_shard" });
  }

  function add(event) {
    console.log("GTT0: Adding Mystical Agriculture recipes");
    event.recipes.gtceu
      .forge_hammer("danburite_to_prosperity_shards")
      .itemInputs("gtceu:danburite_gem")
      .itemOutputs("4x mysticalagriculture:prosperity_shard")
      .duration(100)
      .EUt(16);
  }
})();
