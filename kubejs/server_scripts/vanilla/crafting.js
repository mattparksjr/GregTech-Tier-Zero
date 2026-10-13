(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Vanilla");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeById(event, "Vanilla", [
      "minecraft:crafting_table",
      "minecraft:wheat",
      "minecraft:golden_carrot",
      "minecraft:bread",
    ]);
    GTT0.removeByOutput(event, "Vanilla", [
      "#minecraft:beds",
      "minecraft:blast_furnace",
      "minecraft:hay_block",
      "minecraft:smoker",
      "minecraft:stonecutter",
    ]);
  }

  function add(event) {
    console.log("GTT0: Adding vanilla crafting recipes");

    event.campfireCooking(
      "gtceu:small_ash_dust",
      "#minecraft:logs_that_burn",
      0,
      600,
    );

    Color.DYE.forEach((color) => {
      event
        .shaped(`minecraft:${color}_bed`, ["CCC", "PPP", "FHF"], {
          C: `minecraft:${color}_carpet`,
          P: "#minecraft:planks",
          H: GTT0.MALLET,
          F: "#forge:fences/wooden",
        })
        .damageIngredient(GTT0.MALLET, 10);
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

    event.shaped("minecraft:smoker", ["PPP", "PFP", "LLL"], {
      P: "#forge:plates/iron",
      F: "#forge:furnaces",
      L: "#minecraft:logs",
    });

    event.shaped("minecraft:stonecutter", ["   ", "PBP", "SSS"], {
      P: "#forge:plates/iron",
      S: "minecraft:smooth_stone",
      B: "gtceu:steel_buzz_saw_blade",
    });

    GTT0.basicBlockCompressor(
      event,
      "hay",
      "minecraft:hay_block",
      "minecraft:wheat",
    );
  }
})();
