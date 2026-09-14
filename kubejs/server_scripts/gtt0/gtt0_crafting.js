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
    event.remove({ output: "solclassic:basket" });
    event.remove({ output: "solclassic:wicker_basket" });
    event.remove({ output: "supplementaries:lunch_basket" });
    event.remove({ mod: "torchmaster" });
  }

  function add(event) {
    console.log("GTT0: Adding GTT0 crafting recipes");

    const HAMMER = "#gtceu:tools/crafting_hammers";
    const SAW = "#gtceu:tools/crafting_saws";
    const FILE = "#gtceu:tools/crafting_files";

    event
      .shaped("rechiseled:chisel", ["FP", "SH"], {
        H: HAMMER,
        F: FILE,
        P: "#forge:plates/iron",
        S: "#forge:rods/wooden",
      })
      .damageIngredient(HAMMER);

    event
      .shaped("craftingstation:crafting_station", ["CS"], {
        C: "minecraft:crafting_table",
        S: SAW,
      })
      .damageIngredient(SAW);

    event
      .shaped("craftingstation:crafting_station_slab", ["CS"], {
        C: "craftingstation:crafting_station",
        S: SAW,
      })
      .damageIngredient(SAW);

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
  }
})();
