(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("World");
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

    GTT0.removeByInput(event, "World", ["neapolitan:ice"]);
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
      {
        id: "ice_from_cubes",
        block: "minecraft:ice",
        item: "neapolitan:ice_cubes",
        count: 4,
      },
    ]);
  }
})();
