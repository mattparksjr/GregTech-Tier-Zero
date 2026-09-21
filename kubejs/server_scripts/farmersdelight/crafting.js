(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing Farmers Delight recipes");
    event.remove({ id: "farmersdelight:straw" });
    event.remove({ id: "farmersdelight:straw_bale" });
    event.remove({ id: "farmersdelight:cutting_board" });
    event.remove({ id: "farmersdelight:cooking_pot" });
    event.remove({ id: "farmersdelight:stove" });
    event.remove({ id: "farmersdelight:skillet" });
    event.remove({ id: "farmersdelight:wheat_dough_from_water" });
    event.remove({ id: "farmersdelight:wheat_dough_from_flour_and_eggs" });
  }

  function add(event) {
    console.log("GTT0: Adding Farmers Delight recipes");

    const MELLET = Ingredient.of("#gtceu:tools/crafting_mallets");
    const FILE = Ingredient.of("#gtceu:tools/crafting_files");
    const HAMMER = Ingredient.of("#gtceu:tools/crafting_hammers");

    event
      .shaped("farmersdelight:cutting_board", [" H ", "SPP", "SPP"], {
        H: MELLET,
        S: "#forge:rods/wooden",
        P: "#minecraft:planks",
      })
      .damageIngredient(MELLET);

    event.shaped("farmersdelight:cooking_pot", ["SHS", "RBR", "PPP"], {
      H: "minecraft:wooden_shovel",
      P: "#forge:plates/iron",
      B: "minecraft:bucket",
      S: "farmersdelight:rope",
      R: "#forge:rods/iron",
    });

    event.shaped("farmersdelight:stove", ["PPP", "BGB", "BCB"], {
      P: "#forge:plates/iron",
      B: "minecraft:bricks",
      G: "minecraft:iron_bars",
      C: "minecraft:campfire",
    });

    event.shaped("farmersdelight:skillet", [" PP", "FPP", "SRH"], {
      P: "#forge:plates/iron",
      F: FILE,
      S: "farmersdelight:rope",
      R: "#forge:rods/iron",
      H: HAMMER,
    });

    event.recipes.gtceu
      .compressor("straw_bale")
      .itemInputs("9x farmersdelight:straw")
      .itemOutputs("farmersdelight:straw_bale")
      .EUt(1)
      .duration(150);

    event.recipes.gtceu
      .mixer("wheat_dough")
      .itemInputs("3x enderio:flour")
      .inputFluids("minecraft:water 500")
      .itemOutputs("4x farmersdelight:wheat_dough")
      .duration(100)
      .EUt(16);
  }
})();
