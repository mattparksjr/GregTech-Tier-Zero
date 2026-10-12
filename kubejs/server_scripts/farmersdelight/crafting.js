(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Farmers Delight");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeById(event, "Farmers Delight", [
      "farmersdelight:straw",
      "farmersdelight:straw_bale",
      "farmersdelight:cutting_board",
      "farmersdelight:cooking_pot",
      "farmersdelight:stove",
      "farmersdelight:skillet",
      "farmersdelight:wheat_dough_from_water",
      "farmersdelight:wheat_dough_from_egg",
      "farmersdelight:rope",
    ]);
  }

  function add(event) {
    console.log("GTT0: Adding Farmers Delight recipes");

    event
      .shaped("farmersdelight:cutting_board", [" H ", "SPP", "SPP"], {
        H: GTT0.MALLET,
        S: "#forge:rods/wooden",
        P: "#minecraft:planks",
      })
      .damageIngredient(GTT0.MALLET, 2);

    event.shaped("farmersdelight:cooking_pot", ["SHS", "RBR", "PPP"], {
      H: "minecraft:wooden_shovel",
      P: "#forge:plates/iron",
      B: "minecraft:bucket",
      S: "farmersdelight:rope",
      R: "#forge:rods/iron",
    });

    event.shaped("farmersdelight:rope", ["SS", "SS"], {
      S: "farmersdelight:straw",
    });

    event.shaped("farmersdelight:stove", ["PPP", "BGB", "BCB"], {
      P: "#forge:plates/iron",
      B: "minecraft:bricks",
      G: "minecraft:iron_bars",
      C: "minecraft:campfire",
    });

    event
      .shaped("farmersdelight:skillet", [" PP", "FPP", "SRH"], {
        P: "#forge:plates/iron",
        F: GTT0.FILE,
        S: "farmersdelight:rope",
        R: "#forge:rods/iron",
        H: GTT0.HAMMER,
      })
      .damageIngredient(GTT0.HAMMER, 5)
      .damageIngredient(GTT0.FILE, 5);

    GTT0.basicBlockCompressor(
      event,
      "straw_bale",
      "farmersdelight:straw_bale",
      "farmersdelight:straw",
    );

    event.recipes.gtceu
      .mixer("wheat_dough")
      .itemInputs("3x enderio:flour")
      .inputFluids("minecraft:water 500")
      .itemOutputs("4x farmersdelight:wheat_dough")
      .duration(100)
      .EUt(16);
  }
})();
