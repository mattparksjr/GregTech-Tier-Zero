(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Mystical Agriculture (Prudentium)");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeByOutput(event, "Mystical Agriculture(Prudentium)", [
      "mysticalagriculture:prudentium_block",
      "mysticalagriculture:prudentium_farmland",
      "mysticalagriculture:prudentium_growth_accelerator",
      "mysticalagriculture:prudentium_ingot",
      "mysticalagriculture:prudentium_gemstone",
      "mysticalagradditions:prudentium_coal",
      "mysticalagradditions:prudentium_apple",
      "mysticalagriculture:prudentium_ingot_block",
      "mysticalagradditions:prudentium_coal_block",
      "mysticalagriculture:prudentium_gemstone_block",
      "mysticalagradditions:prudentium_paxel",
      "mysticalagriculture:prudentium_sword",
      "mysticalagriculture:prudentium_pickaxe",
      "mysticalagriculture:prudentium_shovel",
      "mysticalagriculture:prudentium_hoe",
      "mysticalagriculture:prudentium_axe",
      "mysticalagriculture:prudentium_watering_can",
      "mysticalagriculture:prudentium_bow",
      "mysticalagriculture:prudentium_crossbow",
      "mysticalagriculture:prudentium_shears",
      "mysticalagriculture:prudentium_fishing_rod",
      "mysticalagriculture:prudentium_sickle",
      "mysticalagriculture:prudentium_scythe",
      "mysticalagriculture:prudentium_helmet",
      "mysticalagriculture:prudentium_chestplate",
      "mysticalagriculture:prudentium_leggings",
      "mysticalagriculture:prudentium_boots",
    ]);

    GTT0.removeById(event, "Mystical Agriculture(Prudentium) ID", [
      "mysticalagriculture:prudentium_block_uncraft",
      "mysticalagriculture:tertium_essence_uncraft",
      "mysticalagriculture:prudentium_ingot_uncraft",
      "mysticalagradditions:prudentium_coal_block_uncraft",
    ]);
  }

  function add(event) {
    GTT0.log("Mystical Agriculture (Prudentium)", "Adding recipes");

    event.recipes.gtceu
      .compressor("prudentium_block")
      .itemInputs("9x mysticalagriculture:prudentium_essence")
      .itemOutputs("mysticalagriculture:prudentium_block")
      .EUt(60)
      .duration(80);

    event.recipes.gtceu
      .compressor("prudentium_coal_block")
      .itemInputs("9x mysticalagradditions:prudentium_coal")
      .itemOutputs("mysticalagradditions:prudentium_coal_block")
      .EUt(60)
      .duration(80);

    event.recipes.gtceu
      .compressor("prudentium_ingot_block")
      .itemInputs("9x mysticalagriculture:prudentium_ingot")
      .itemOutputs("mysticalagriculture:prudentium_ingot_block")
      .EUt(60)
      .duration(100);

    event.recipes.gtceu
      .compressor("prudentium_gemstone_block")
      .itemInputs("9x mysticalagriculture:prudentium_gemstone")
      .itemOutputs("mysticalagriculture:prudentium_gemstone_block")
      .EUt(60)
      .duration(100);

    event.recipes.gtceu
      .extractor("prudentium_essence_to_molten")
      .itemInputs("mysticalagriculture:prudentium_essence")
      .outputFluids("mysticalagradditions:molten_prudentium 144")
      .duration(60)
      .EUt(64);

    event
      .shaped("mysticalagriculture:prudentium_nugget", ["IS"], {
        I: "mysticalagriculture:prudentium_ingot",
        S: GTT0.SAW,
      })
      .damageIngredient(GTT0.SAW, 3);

    event.recipes.gtceu
      .assembler("prudentium_gemstone")
      .itemInputs("1x #forge:gems/prosperity")
      .inputFluids("mysticalagradditions:molten_prudentium 576")
      .itemOutputs("mysticalagriculture:prudentium_gemstone")
      .duration(80)
      .EUt(45);

    event.recipes.gtceu
      .assembler("prudentium_ingot")
      .itemInputs("1x #forge:ingots/prosperity")
      .inputFluids("mysticalagradditions:molten_prudentium 576")
      .itemOutputs("mysticalagriculture:prudentium_ingot")
      .duration(80)
      .EUt(45);

    event.recipes.gtceu
      .assembler("prudentium_coal")
      .itemInputs("1x minecraft:coal")
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagradditions:prudentium_coal")
      .duration(80)
      .EUt(45);

    event.recipes.gtceu
      .assembler("prudentium_apple")
      .itemInputs("1x minecraft:golden_apple")
      .inputFluids("mysticalagradditions:molten_prudentium 576")
      .itemOutputs("mysticalagradditions:prudentium_apple")
      .duration(60)
      .EUt(45);

    event.recipes.gtceu
      .forge_hammer("prudentium_coal_block_uncraft")
      .itemInputs("mysticalagradditions:prudentium_coal_block")
      .itemOutputs("9x mysticalagradditions:prudentium_coal")
      .duration(120)
      .EUt(45);

    event.recipes.gtceu
      .alloy_smelter("prudentium_ingot_block_uncraft")
      .itemInputs("mysticalagriculture:prudentium_ingot_block")
      .notConsumable("gtceu:ingot_casting_mold")
      .itemOutputs("9x mysticalagriculture:prudentium_ingot")
      .duration(504)
      .EUt(64);

    event.recipes.gtceu
      .forge_hammer("prudentium_gemstone_block_uncraft")
      .itemInputs("mysticalagriculture:prudentium_gemstone_block")
      .itemOutputs("9x mysticalagriculture:prudentium_gemstone")
      .duration(160)
      .EUt(64);

    event.recipes.gtceu
      .chemical_bath("prudentium_farmland")
      .itemInputs("mysticalagriculture:inferium_farmland")
      .inputFluids("mysticalagradditions:molten_prudentium 576")
      .itemOutputs("mysticalagriculture:prudentium_farmland")
      .duration(300)
      .EUt(105);

    event.recipes.gtceu
      .assembler("prudentium_paxel")
      .itemInputs(
        "1x mysticalagriculture:prudentium_axe",
        "1x mysticalagriculture:prudentium_shovel",
        "1x mysticalagriculture:prudentium_pickaxe",
      )
      .itemOutputs("mysticalagradditions:prudentium_paxel")
      .duration(300)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_sword")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_sword",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_sword")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_pickaxe")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_pickaxe",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_pickaxe")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_shovel")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_shovel",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_shovel")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_axe")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_axe",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_axe")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_hoe")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_hoe",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_hoe")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_bow")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x minecraft:bow",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_bow")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_crossbow")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x minecraft:crossbow",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_crossbow")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_shears")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x minecraft:shears",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_shears")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_fishing_rod")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x minecraft:fishing_rod",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_fishing_rod")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_sickle")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_sickle",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_sickle")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_scythe")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_scythe",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_scythe")
      .duration(80)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_watering_can")
      .itemInputs(
        "4x mysticalagriculture:mystical_fertilizer",
        "4x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:watering_can",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 576")
      .itemOutputs("mysticalagriculture:prudentium_watering_can")
      .duration(160)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_helmet")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_helmet",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_helmet")
      .duration(160)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_chestplate")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_chestplate",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_chestplate")
      .duration(160)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_leggings")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_leggings",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_leggings")
      .duration(160)
      .EUt(128);

    event.recipes.gtceu
      .assembler("prudentium_boots")
      .itemInputs(
        "2x mysticalagriculture:prudentium_gemstone",
        "2x mysticalagriculture:prudentium_ingot",
        "1x mysticalagriculture:inferium_boots",
      )
      .inputFluids("mysticalagradditions:molten_prudentium 288")
      .itemOutputs("mysticalagriculture:prudentium_boots")
      .duration(160)
      .EUt(128);
  }
})();
