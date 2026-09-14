(() => {
  ServerEvents.tags("item", (event) => {
    console.log("GTT0: Adding item tags for GTT0");

    event.add("forge:furnaces", "minecraft:furnace");
    event.add("forge:furnaces", "quark:deepslate_furnace");
    event.add("forge:furnaces", "quark:blackstone_furnace");
  });
})();
