(() => {
  ServerEvents.recipes((event) => {
    console.log("GTT0: Modifiying General World recipes");
    remove(event);
    add(event);
  });

  function remove(event) {
    event.remove({ input: "projectvibrantjourneys:ice_chunks" });
    event.remove({ input: "projectvibrantjourneys:rocks" });
    event.remove({ input: "projectvibrantjourneys:mossy_rocks" });
    event.remove({ input: "twigs:pebble" });
  }

  function add(event) {
    event.recipes.gtceu
      .compressor("ice_from_chunks")
      .itemInputs("4x projectvibrantjourneys:ice_chunks")
      .itemOutputs("minecraft:ice")
      .EUt(1)
      .duration(200);
    event.recipes.gtceu
      .compressor("rocks_from_chunks")
      .itemInputs("4x projectvibrantjourneys:rocks")
      .itemOutputs("minecraft:cobblestone")
      .EUt(1)
      .duration(200);
    event.recipes.gtceu
      .compressor("mossy_rocks_from_chunks")
      .itemInputs("4x projectvibrantjourneys:mossy_rocks")
      .itemOutputs("minecraft:mossy_cobblestone")
      .EUt(1)
      .duration(200);

    event.recipes.gtceu
      .compressor("cobble_from_pebble")
      .itemInputs("4x twigs:pebble")
      .itemOutputs("minecraft:cobblestone")
      .EUt(1)
      .duration(200);
  }
})();
