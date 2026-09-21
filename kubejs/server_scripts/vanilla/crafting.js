(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing vanilla crafting recipes");
    event.remove({ id: "minecraft:crafting_table" });
    event.remove({ output: "#minecraft:beds" });
    event.remove({ output: "minecraft:blast_furnace" });
    event.remove({ output: "minecraft:hay_block" });
    event.remove({ id: "minecraft:wheat" });
    event.remove({ id: "minecraft:golden_carrot" });
    event.remove({ id: "minecraft:bread" });
  }

  function add(event) {
    console.log("GTT0: Adding vanilla crafting recipes");
    event.campfireCooking(
      "#minecraft:logs_that_burn",
      "gtceu:small_ash_dust",
      0,
      600,
    );

    const MELLET = Ingredient.of("#gtceu:tools/crafting_mallets");

    Color.DYE.forEach((color) => {
      event
        .shaped(`minecraft:${color}_bed`, ["CCC", "PPP", "FHF"], {
          C: `minecraft:${color}_carpet`,
          P: "#minecraft:planks",
          H: MELLET,
          F: "#forge:fences/wooden",
        })
        .damageIngredient(MELLET);
    });

    event.shaped("minecraft:crafting_table", ["FF", "PP"], {
      P: "#minecraft:logs",
      F: "minecraft:flint",
    });

    event.shaped("minecraft:blast_furnace", ["PPP", "PFP", "SSS"], {
      P: "#forge:plates/iron",
      F: "#forge:furnaces",
      S: "minecraft:smooth_stone",
    });

    event.recipes.gtceu
      .compressor("hay")
      .itemInputs("9x minecraft:wheat")
      .itemOutputs("minecraft:hay_block")
      .EUt(1)
      .duration(250);
  }
})();
