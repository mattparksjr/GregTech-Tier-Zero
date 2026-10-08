(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    console.log("GTT0: Modifiying General World recipes");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeByInput(event, "World", [
      "projectvibrantjourneys:ice_chunks",
      "projectvibrantjourneys:rocks",
      "projectvibrantjourneys:mossy_rocks",
      "twigs:pebble",
    ]);
  }

  function add(event) {
    GTT0.basicBlockCompressorBatch(event, "World", [
      {
        id: "ice_from_chunks",
        block: "minecraft:ice",
        item: "projectvibrantjourneys:ice_chunks",
        count: 4,
      },
      {
        id: "rocks_from_chunks",
        block: "minecraft:cobblestone",
        item: "projectvibrantjourneys:rocks",
        count: 4,
      },
      {
        id: "mossy_rocks_from_chunks",
        block: "minecraft:mossy_cobblestone",
        item: "projectvibrantjourneys:mossy_rocks",
        count: 4,
      },
      {
        id: "cobble_from_pebble",
        block: "minecraft:cobblestone",
        item: "twigs:pebble",
        count: 4,
      },
    ]);
  }
})();
