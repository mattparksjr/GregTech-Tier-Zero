(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing GTT0 crafting recipes");

    event.remove({ output: "rechiseled:chisel" });
    event.remove({ id: "craftingstation:crafting_station" });
    event.remove({ id: "craftingstation:crafting_station_slab" });
    event.remove({ mod: "elevatorid" });
    event.remove({ mod: "travelanchors" });
    //event.remove({ mod: "waystones" });
    event.remove({ output: "solclassic:basket" });
    event.remove({ output: "solclassic:wicker_basket" });
    event.remove({ output: "supplementaries:lunch_basket" });
    event.remove({ mod: "torchmaster" });
    event.remove({ id: "minecraft:golden_carrot" });
    event.remove({ mod: "hangglider" });
  }

  function add(event) {
    console.log("GTT0: Adding GTT0 crafting recipes");

    const HAMMER = "#gtceu:tools/crafting_hammers";
    const SAW = "#gtceu:tools/crafting_saws";
    const FILE = "#gtceu:tools/crafting_files";
    const DRIVER = "gtceu:tools/crafting_screwdrivers";

    event
      .shaped("rechiseled:chisel", ["FP", "SH"], {
        H: HAMMER,
        F: FILE,
        P: "#forge:plates/iron",
        S: "#forge:rods/wooden",
      })
      .damageIngredient(HAMMER, 2);

    event
      .shaped("craftingstation:crafting_station", ["CS"], {
        C: "minecraft:crafting_table",
        S: SAW,
      })
      .damageIngredient(SAW, 5);

    event
      .shaped("craftingstation:crafting_station_slab", ["CS"], {
        C: "craftingstation:crafting_station",
        S: SAW,
      })
      .damageIngredient(SAW, 2);

    event.shaped("supplementaries:lunch_basket", ["RWR", "SCS", "SSS"], {
      S: "farmersdelight:straw_bale",
      R: "farmersdelight:rope",
      W: "#forge:rods/wooden",
      C: "#forge:chests/wooden",
    });

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
        H: HAMMER,
        R: "#forge:rods/steel",
        L: "minecraft:leather",
      })
      .damageIngredient(HAMMER, 10);

    event
      .shaped("hangglider:glider_framework", [" R ", "RHR", "RRR"], {
        H: HAMMER,
        R: "#forge:rods/steel",
      })
      .damageIngredient(HAMMER, 10);

    event
      .shaped("hangglider:hang_glider", ["SPS", "WFW", "SDS"], {
        S: "#forge:screws/steel",
        P: "#forge:plates/steel",
        W: "hangglider:glider_wing",
        F: "hangglider:glider_framework",
        D: DRIVER,
      })
      .damageIngredient(DRIVER, 10);

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
  }
})();
