(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Quark");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeById(event, "Quark", [
      "quark:building/crafting/compressed/golden_carrot_crate_uncompress",
      "quark:tweaks/crafting/dirty_glass",
      "quark:tweaks/crafting/clear_glass",
    ]);
    GTT0.removeByOutput(event, "Quark", ["quark:golden_carrot_crate"]);
  }

  function add(event) {
    GTT0.basicBlockCompressor(
      event,
      "golden_carrot_crate",
      "quark:golden_carrot_crate",
      "minecraft:golden_carrot",
    );
  }
})();
