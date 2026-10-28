(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Mystical Agriculture (Inferium)");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeByOutput(event, "Mystical Agriculture(Inferium)", [
      "mysticalagriculture:inferium_block",
      "mysticalagriculture:inferium_farmland",
      "mysticalagriculture:inferium_growth_accelerator",
      "mysticalagriculture:inferium_ingot",
      "mysticalagriculture:inferium_gemstone",
      "mysticalagriculture:inferium_seeds",
      "mysticalagradditions:inferium_coal",
      "mysticalagradditions:inferium_apple",
      "mysticalagriculture:inferium_ingot_block",
      "mysticalagradditions:inferium_coal_block",
      "mysticalagriculture:inferium_gemstone_block",
      "mysticalagradditions:inferium_paxel",
      "mysticalagriculture:inferium_sword",
      "mysticalagriculture:inferium_pickaxe",
      "mysticalagriculture:inferium_shovel",
      "mysticalagriculture:inferium_hoe",
      "mysticalagriculture:inferium_axe",
      "mysticalagriculture:inferium_watering_can",
      "mysticalagriculture:inferium_bow",
      "mysticalagriculture:inferium_crossbow",
      "mysticalagriculture:inferium_shears",
      "mysticalagriculture:inferium_fishing_rod",
      "mysticalagriculture:inferium_sickle",
      "mysticalagriculture:inferium_scythe",
      "mysticalagriculture:inferium_helmet",
      "mysticalagriculture:inferium_chestplate",
      "mysticalagriculture:inferium_leggings",
      "mysticalagriculture:inferium_boots",
    ]);

    GTT0.removeById(event, "Mystical Agriculture(Inferium) ID", [
      "mysticalagriculture:inferium_block_uncraft",
      "mysticalagriculture:prudentium_essence_uncraft",
      "mysticalagriculture:inferium_ingot_uncraft",
      "mysticalagradditions:inferium_coal_block_uncraft",
    ]);
  }

  function add(event) {
    GTT0.log("Mystical Agriculture (Inferium)", "Adding recipes");

    event.recipes.gtceu
      .compressor("inferium_block")
      .itemInputs("9x mysticalagriculture:inferium_essence")
      .itemOutputs("mysticalagriculture:inferium_block")
      .EUt(32)
      .duration(80);

    event.recipes.gtceu
      .compressor("inferium_coal_block")
      .itemInputs("9x mysticalagradditions:inferium_coal")
      .itemOutputs("mysticalagradditions:inferium_coal_block")
      .EUt(32)
      .duration(80);

    event.recipes.gtceu
      .compressor("inferium_ingot_block")
      .itemInputs("9x mysticalagriculture:inferium_ingot")
      .itemOutputs("mysticalagriculture:inferium_ingot_block")
      .EUt(32)
      .duration(100);

    event.recipes.gtceu
      .compressor("inferium_gemstone_block")
      .itemInputs("9x mysticalagriculture:inferium_gemstone")
      .itemOutputs("mysticalagriculture:inferium_gemstone_block")
      .EUt(32)
      .duration(100);

    event.recipes.gtceu
      .extractor("inferium_essence_to_molten")
      .itemInputs("mysticalagriculture:inferium_essence")
      .outputFluids("mysticalagradditions:molten_inferium 144")
      .duration(60)
      .EUt(24);

    event
      .shaped("mysticalagriculture:inferium_nugget", ["IS"], {
        I: "mysticalagriculture:inferium_ingot",
        S: GTT0.SAW,
      })
      .damageIngredient(GTT0.SAW, 3);

    event.recipes.gtceu
      .assembler("inferium_gemstone")
      .itemInputs("1x #forge:gems/prosperity")
      .inputFluids("mysticalagradditions:molten_inferium 576")
      .itemOutputs("mysticalagriculture:inferium_gemstone")
      .duration(80)
      .EUt(24);

    event.recipes.gtceu
      .assembler("inferium_ingot")
      .itemInputs("1x #forge:ingots/prosperity")
      .inputFluids("mysticalagradditions:molten_inferium 576")
      .itemOutputs("mysticalagriculture:inferium_ingot")
      .duration(80)
      .EUt(24);

    event.recipes.gtceu
      .assembler("inferium_coal")
      .itemInputs("1x minecraft:coal")
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagradditions:inferium_coal")
      .duration(80)
      .EUt(24);

    event.recipes.gtceu
      .assembler("inferium_apple")
      .itemInputs("1x minecraft:golden_apple")
      .inputFluids("mysticalagradditions:molten_inferium 576")
      .itemOutputs("mysticalagradditions:inferium_apple")
      .duration(60)
      .EUt(24);

    event.recipes.gtceu
      .forge_hammer("inferium_coal_block_uncraft")
      .itemInputs("mysticalagradditions:inferium_coal_block")
      .itemOutputs("9x mysticalagradditions:inferium_coal")
      .duration(120)
      .EUt(7);

    event.recipes.gtceu
      .alloy_smelter("inferium_ingot_block_uncraft")
      .itemInputs("mysticalagriculture:inferium_ingot_block")
      .notConsumable("gtceu:ingot_casting_mold")
      .itemOutputs("9x mysticalagriculture:inferium_ingot")
      .duration(504)
      .EUt(7);

    event.recipes.gtceu
      .forge_hammer("inferium_gemstone_block_uncraft")
      .itemInputs("mysticalagriculture:inferium_gemstone_block")
      .itemOutputs("9x mysticalagriculture:inferium_gemstone")
      .duration(160)
      .EUt(12);

    event.recipes.gtceu
      .chemical_bath("inferium_farmland")
      .itemInputs("farmersdelight:rich_soil_farmland")
      .inputFluids("mysticalagradditions:molten_inferium 576")
      .itemOutputs("mysticalagriculture:inferium_farmland")
      .duration(300)
      .EUt(24);

    event.recipes.gtceu
      .chemical_bath("inferium_seeds")
      .itemInputs("2x mysticalagriculture:prosperity_seed_base")
      .inputFluids("mysticalagradditions:molten_inferium 1152")
      .itemOutputs("mysticalagriculture:inferium_seeds")
      .duration(300)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_paxel")
      .itemInputs(
        "1x mysticalagriculture:inferium_axe",
        "1x mysticalagriculture:inferium_shovel",
        "1x mysticalagriculture:inferium_pickaxe",
      )
      .itemOutputs("mysticalagradditions:inferium_paxel")
      .duration(240)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_sword")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_sword",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_sword")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_pickaxe")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_pickaxe",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_pickaxe")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_shovel")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_shovel",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_shovel")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_axe")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_axe",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_axe")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_hoe")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_hoe",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_hoe")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_bow")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:bow",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_bow")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_crossbow")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:crossbow",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_crossbow")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_shears")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:shears",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_shears")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_fishing_rod")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:fishing_rod",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_fishing_rod")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_sickle")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x mysticalagriculture:diamond_sickle",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_sickle")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_scythe")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x mysticalagriculture:diamond_scythe",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_scythe")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_watering_can")
      .itemInputs(
        "4x mysticalagriculture:mystical_fertilizer",
        "4x mysticalagriculture:inferium_ingot",
        "1x mysticalagriculture:watering_can",
      )
      .inputFluids("mysticalagradditions:molten_inferium 576")
      .itemOutputs("mysticalagriculture:inferium_watering_can")
      .duration(160)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_helmet")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_helmet",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_helmet")
      .duration(160)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_chestplate")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_chestplate",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_chestplate")
      .duration(160)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_leggings")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_leggings",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_leggings")
      .duration(160)
      .EUt(32);

    event.recipes.gtceu
      .assembler("inferium_boots")
      .itemInputs(
        "2x mysticalagriculture:inferium_gemstone",
        "2x mysticalagriculture:inferium_ingot",
        "1x minecraft:diamond_boots",
      )
      .inputFluids("mysticalagradditions:molten_inferium 288")
      .itemOutputs("mysticalagriculture:inferium_boots")
      .duration(160)
      .EUt(32);
  }
})();
