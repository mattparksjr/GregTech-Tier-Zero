(() => {
  ServerEvents.recipes((event) => {
    console.log("GTT0: Modifiying Quark recipes");
    remove(event);
    add(event);
  });

  function remove(event) {
    event.remove({
      id: "quark:building/crafting/compressed/golden_carrot_crate_uncompress",
    });

    event.remove({ output: "quark:golden_carrot_crate" });
  }

  function add(event) {
    event.recipes.gtceu
      .compressor("golden_carrot_crate")
      .itemInputs("9x minecraft:golden_carrot")
      .itemOutputs("quark:golden_carrot_crate")
      .EUt(1.5)
      .duration(300);
  }
})();
