(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Sophisticated Backpacks (Upgrades)");

    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeById(event, "Sophisticated Backpacks (Upgrades)", [
      "sophisticatedbackpacks:upgrade_base",
      "sophisticatedbackpacks:crafting_upgrade",
      "sophisticatedbackpacks:blasting_upgrade",
      "sophisticatedbackpacks:smelting_upgrade",
      "sophisticatedbackpacks:smoking_upgrade",
      "sophisticatedbackpacks:bstonecutter_upgrade",
    ]);
  }

  function add(event) {
    event.recipes.gtceu
      .assembler("upgrade_base")
      .itemInputs(
        "2x #forge:rings/bronze",
        "3x minecraft:leather",
        "2x farmersdelight:rope",
        "2x #forge:rods/iron",
      )
      .circuit(2)
      .itemOutputs("sophisticatedbackpacks:upgrade_base")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("crafting_upgrade")
      .itemInputs(
        "2x #forge:plates/steel",
        "1x craftingstationjei:crafting_station_slab",
        "2x #forge:chests",
        "1x sophisticatedbackpacks:upgrade_base",
      )
      .circuit(2)
      .inputFluids("gtceu:glue 50")
      .itemOutputs("sophisticatedbackpacks:crafting_upgrade")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("blasting_upgrade")
      .itemInputs(
        "2x #forge:plates/red_alloy",
        "1x minecraft:blast_furnace",
        "4x #forge:plates/steel",
        "1x sophisticatedbackpacks:upgrade_base",
      )
      .circuit(2)
      .inputFluids("gtceu:glue 50")
      .itemOutputs("sophisticatedbackpacks:blasting_upgrade")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("smelting_upgrade")
      .itemInputs(
        "2x #forge:plates/red_alloy",
        "1x #forge:furnaces",
        "4x #forge:plates/steel",
        "1x sophisticatedbackpacks:upgrade_base",
      )
      .circuit(2)
      .inputFluids("gtceu:glue 50")
      .itemOutputs("sophisticatedbackpacks:smelting_upgrade")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("smoking_upgrade")
      .itemInputs(
        "2x #forge:plates/red_alloy",
        "1x minecraft:smoker",
        "4x #forge:plates/steel",
        "1x sophisticatedbackpacks:upgrade_base",
      )
      .circuit(2)
      .inputFluids("gtceu:glue 50")
      .itemOutputs("sophisticatedbackpacks:smoking_upgrade")
      .duration(80)
      .EUt(32);

    event.recipes.gtceu
      .assembler("stonecutter_upgrade")
      .itemInputs(
        "1x #forge:plates/red_alloy",
        "1x minecraft:stonecutter",
        "2x #forge:plates/steel",
        "1x sophisticatedbackpacks:upgrade_base",
      )
      .circuit(2)
      .inputFluids("gtceu:glue 50")
      .itemOutputs("sophisticatedbackpacks:stonecutter_upgrade")
      .duration(80)
      .EUt(32);
  }
})();
