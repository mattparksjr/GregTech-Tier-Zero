(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("GTT0");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeByMod(event, "GTT0", [
      "elevatorid",
      "travelanchors",
      "torchmaster",
      "hangglider",
      //"waystones"
    ]);

    GTT0.removeByOutput(event, "GTT0", [
      "chisel:chisel",
      "solclassic:basket",
      "solclassic:wicker_basket",
      "enderchests:ender_chest",
      "enderchests:ender_bag",
      "endertanks:ender_tank",
      "endertanks:ender_bucket",
    ]);

    GTT0.removeById(event, "GTT0", [
      "toolbelt:belt",
      "toolbelt:pouch",
      "minecraft:golden_carrot",
      "craftingstationjei:crafting_station",
      "craftingstationjei:crafting_station_slab",
    ]);
  }

  function add(event) {
    event
      .shaped("chisel:chisel", ["FP", "SH"], {
        H: GTT0.HAMMER,
        F: GTT0.FILE,
        P: "#forge:plates/iron",
        S: "#forge:rods/wooden",
      })
      .damageIngredient(GTT0.HAMMER, 2);

    event.shaped("toolbelt:belt", ["IRI", "LCL", "LRL"], {
      I: "#forge:rings/iron",
      R: "farmersdelight:rope",
      L: "minecraft:leather",
      C: "#forge:chests",
    });

    event.shaped("toolbelt:pouch", ["RGR", "LCL", "RLR"], {
      G: "#forge:rings/gold",
      R: "farmersdelight:rope",
      L: "minecraft:leather",
      C: "#forge:chests",
    });

    event
      .shaped("craftingstationjei:crafting_station", ["CS"], {
        C: "minecraft:crafting_table",
        S: GTT0.SAW,
      })
      .damageIngredient(GTT0.SAW, 5);

    event
      .shaped("craftingstationjei:crafting_station_slab", ["CS"], {
        C: "craftingstationjei:crafting_station",
        S: GTT0.SAW,
      })
      .damageIngredient(GTT0.SAW, 2);

    event.shaped("torchmaster:megatorch", ["PRP", "DCD", "SLS"], {
      P: "#forge:plates/iron",
      R: "#forge:rings/gold",
      D: "#forge:gems/diamond",
      C: "#forge:storage_blocks/coke",
      L: "#minecraft:logs",
      S: "#forge:screws/steel",
    });

    event.recipes.gtceu
      .assembler("dreadlamp")
      .itemInputs(
        "2x gtceu:tempered_glass",
        "4x #forge:plates/obsidian",
        "1x #forge:flawless_gems/diamond",
        "2x #forge:screws/steel",
      )
      .itemOutputs("2x torchmaster:dreadlamp")
      .duration(50)
      .EUt(30);

    event.recipes.gtceu
      .assembler("feral_flare_lantern")
      .itemInputs(
        "4x gtceu:tempered_glass",
        "2x #forge:plates/obsidian",
        "1x #forge:plates/glowstone",
        "2x #forge:screws/steel",
        "2x #forge:rings/steel",
      )
      .itemOutputs("torchmaster:feral_flare_lantern")
      .duration(600)
      .EUt(30);

    event.recipes.gtceu
      .chemical_bath("frozen_pearl")
      .itemInputs("minecraft:ender_pearl")
      .inputFluids("gtceu:ice 1152")
      .itemOutputs("torchmaster:frozen_pearl")
      .duration(300)
      .EUt(24);

    event
      .shaped("hangglider:glider_wing", ["HRL", "RLL", "LLL"], {
        H: GTT0.HAMMER,
        R: "#forge:rods/steel",
        L: "minecraft:leather",
      })
      .damageIngredient(GTT0.HAMMER, 10);

    event
      .shaped("hangglider:glider_framework", [" R ", "RHR", "RRR"], {
        H: GTT0.HAMMER,
        R: "#forge:rods/steel",
      })
      .damageIngredient(GTT0.HAMMER, 10);

    event
      .shaped("hangglider:hang_glider", ["SPS", "WFW", "SDS"], {
        S: "#forge:screws/steel",
        P: "#forge:plates/steel",
        W: "hangglider:glider_wing",
        F: "hangglider:glider_framework",
        D: GTT0.SCREWDRIVER,
      })
      .damageIngredient(GTT0.SCREWDRIVER, 10);

    event.shaped("hangglider:reinforced_hang_glider", ["SVS", "LML", "SVS"], {
      S: "#forge:screws/vanadium_steel",
      V: "#forge:rods/vanadium_steel",
      L: "hangglider:glider_wing",
      M: "hangglider:hang_glider",
    });

    event.recipes.gtceu
      .assembler("gray_elevator")
      .itemInputs(
        "1x minecraft:ender_pearl",
        "2x #forge:plates/obsidian",
        "2x #forge:gears/steel",
        "1x #forge:frames/steel",
      )
      .itemOutputs("elevatorid:elevator_gray")
      .duration(600)
      .EUt(128);

    event.recipes.gtceu
      .chemical_bath("elevator_washing")
      .itemInputs("#elevatorid:elevators")
      .inputFluids("gtceu:chlorine 50")
      .itemOutputs("elevatorid:elevator_gray")
      .duration(800)
      .EUt(48);

    Color.DYE.forEach((color) => {
      event.recipes.gtceu
        .chemical_bath(`${color}_elevator`)
        .itemInputs("#elevatorid:elevators")
        .inputFluids(`gtceu:${color}_dye 25"`)
        .itemOutputs(`elevatorid:elevator_${color}`)
        .duration(40)
        .EUt(108);
    });

    event.recipes.gtceu
      .alloy_smelter("glass_from_dust")
      .itemInputs("3x gtceu:glass_dust")
      .itemOutputs("minecraft:glass")
      .EUt(16)
      .duration(240);

    event.recipes.gtceu
      .assembler("ender_pouch")
      .itemInputs("1x minecraft:ender_eye", "4x minecraft:leather")
      .itemOutputs("enderchests:ender_pouch")
      .duration(100)
      .EUt(256);

    event.recipes.gtceu
      .assembler("ender_bag")
      .itemInputs(
        "1x enderchests:ender_pouch",
        "4x minecraft:blaze_powder",
        "2x #forge:ingots/stainless_steel",
        "2x #minecraft:wool",
      )
      .itemOutputs("enderchests:ender_bag")
      .duration(100)
      .EUt(256);

    event.recipes.gtceu
      .assembler("ender_chest")
      .itemInputs(
        "1x enderchests:ender_pouch",
        "4x minecraft:blaze_powder",
        "2x #forge:ingots/stainless_steel",
        "4x minecraft:obsidian",
      )
      .itemOutputs("enderchests:ender_chest")
      .duration(140)
      .EUt(256);

    event.recipes.gtceu
      .assembler("ender_tank")
      .itemInputs(
        "1x gtceu:wood_drum",
        "4x minecraft:blaze_powder",
        "2x #forge:ingots/stainless_steel",
        "2x gtceu:ender_pearl_dust",
        "4x minecraft:obsidian",
      )
      .itemOutputs("endertanks:ender_tank")
      .duration(140)
      .EUt(256);

    event.recipes.gtceu
      .assembler("ender_bucket")
      .itemInputs(
        "1x minecraft:bucket",
        "4x minecraft:blaze_powder",
        "2x #forge:ingots/stainless_steel",
        "2x gtceu:ender_pearl_dust",
        "1x minecraft:obsidian",
      )
      .itemOutputs("endertanks:ender_bucket")
      .duration(140)
      .EUt(256);
  }
})();
