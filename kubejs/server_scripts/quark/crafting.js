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
    GTT0.removeByOutput(event, "Quark", [
      "quark:golden_carrot_crate",
      "quark:feeding_trough",
    ]);
  }

  function add(event) {
    GTT0.basicBlockCompressor(
      event,
      "golden_carrot_crate",
      "quark:golden_carrot_crate",
      "minecraft:golden_carrot",
    );

    event.recipes.gtceu
      .assembler("feeding_trough")
      .itemInputs(
        "7x gtceu:treated_wood_planks",
        "1x minecraft:golden_carrot",
        "2x #forge:rings/iron",
      )
      .itemOutputs("quark:feeding_trough")
      .duration(100)
      .EUt(32);
  }
})();
