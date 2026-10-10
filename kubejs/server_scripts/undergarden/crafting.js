(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Undergarden");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeById(event, "Undergarden", ["undergarden:catalyst"]);
    GTT0.removeByOutput(event, "Undergarden", ["undergarden:ditchbulb_paste"]);
  }

  function add(event) {
    event.recipes.gtceu
      .assembler("undergarden:catalyst")
      .itemInputs(
        "1x minecraft:ender_pearl",
        "4x #forge:rings/gold",
        "4x #forge:rods/iron",
        "2x #forge:gems/diamond",
      )
      .inputFluids("gtceu:glue 500")
      .itemOutputs("undergarden:catalyst")
      .duration(400)
      .EUt(32);

    event.recipes.gtceu
      .macerator("ditchbulb_to_paste")
      .itemInputs("undergarden:ditchbulb")
      .itemOutputs("undergarden:ditchbulb_paste")
      .EUt(2)
      .duration(80);
  }
})();
