(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing Undergarden crafting recipes");
    event.remove({ id: "undergarden:catalyst" });
  }

  function add(event) {
    console.log("GTT0: Adding Undergarden crafting recipes");

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
      .duration(100)
      .EUt(32);
  }
})();
