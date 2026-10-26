(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Farmers Delight");
    remove(event);
    add(event);

    const found = [];

    // Add the straw cutting recipies to the cutting machine, a natural upgrade
    event.forEachRecipe({ type: "farmersdelight:cutting" }, (r) => {
      const json = JSON.parse(r.json.toString());

      // result is normally an array, but accept a single object too
      const results = Array.isArray(json.result) ? json.result : [json.result];

      if (!results.some((res) => res && res.item === "farmersdelight:straw"))
        return;

      const ing = json.ingredients[0];
      const input = ing.tag ? "#" + ing.tag : ing.item;

      const guaranteed = [];
      const chanced = [];
      results.forEach((res) => {
        const stack = (res.count || 1) + "x " + res.item;
        if (res.chance !== undefined && res.chance < 1) {
          chanced.push({ item: stack, chance: Math.round(res.chance * 10000) });
        } else {
          guaranteed.push(stack);
        }
      });

      found.push({
        id: String(r.getId()),
        input: input,
        guaranteed: guaranteed,
        chanced: chanced,
      });
    });

    found.forEach((f) => {
      const name = "gtt0/cutter/" + f.id.replace(/[^a-z0-9_]/g, "_");
      const recipe = event.recipes.gtceu
        .cutter(name)
        .itemInputs(f.input)
        .duration(40)
        .EUt(5);
      if (f.guaranteed.length > 0) recipe.itemOutputs(f.guaranteed);
      f.chanced.forEach((c) => {
        if (GTT0.DEBUG) {
          GTT0.log(
            "Farmers Delight",
            "chanced " + c.item + " @ " + c.chance + "/10000",
          );
        }
        recipe.chancedOutput(c.item, c.chance, 0);
      });
      if (GTT0.DEBUG) {
        GTT0.log(
          "Farmers Delight",
          f.id +
            " -> " +
            f.input +
            " (" +
            f.guaranteed.length +
            " fixed, " +
            f.chanced.length +
            " chanced)",
        );
      }
    });

    GTT0.log(
      "Farmers Delight",
      "added " + found.length + " straw cutter recipes",
    );
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
      "farmersdelight:canvas",
    ]);
  }

  function add(event) {
    GTT0.log("Farmers Delight", "Adding recipies");

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

    event
      .shaped("farmersdelight:rich_soil_farmland", ["SH"], {
        H: "#forge:tools/hoes",
        S: "farmersdelight:rich_soil",
      })
      .damageIngredient(GTT0.MALLET, 2);

    event.shaped("farmersdelight:rope", ["SS", "SS"], {
      S: "farmersdelight:straw",
    });

    event.shaped("farmersdelight:canvas", ["SSS", "SSS", "SSS"], {
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
