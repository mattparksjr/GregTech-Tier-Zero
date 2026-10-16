(() => {
  const GTT0 = global.GTT0;
  const DEBUG = false; // log all data? note, this will stop removal to allow for future dev

  const KEEP_CROPS = [
    "minecraft/crop/wheat",
    "minecraft/crop/carrot",
    "minecraft/crop/potato",
    "minecraft/crop/beetroot",
    "minecraft/crop/melon",
    "minecraft/crop/pumpkin",
    "minecraft/crop/sugar_cane",
    "minecraft/crop/bamboo",
    "minecraft/crop/cactus",
    "minecraft/crop/cocoa_beans",
    "minecraft/crop/sweet_berry_bush",
    "minecraft/crop/glow_berry_bush",
    "farmersdelight/crop/rice",
    "farmersdelight/crop/wild_rice",
    "farmersdelight/crop/tomatoes",
    "farmersdelight/crop/wild_tomatoes",
    "farmersdelight/crop/cabbage",
    "farmersdelight/crop/wild_cabbage",
    "farmersdelight/crop/onions",
    "farmersdelight/crop/wild_onion",
    "farmersdelight/crop/wild_carrot",
    "farmersdelight/crop/wild_potato",
    "farmersdelight/crop/wild_beetroots",
    "farmersdelight/crop/brown_mushroom_colony",
    "farmersdelight/crop/red_mushroom_colony",
    "neapolitan/crop/strawberries",
    "neapolitan/crop/banana_plant",
    "neapolitan/crop/mint",
    "neapolitan/crop/vanilla_pods",
    "neapolitan/crop/adzuki_beans",
    "delightful/crop/cantaloupe",
    "corn_delight/crop/corn",
    "mysticalagriculture/crop/inferium",
    "mysticalagriculture/crop/rubber",
  ];

  const KEEP_SOILS = [
    "minecraft/soil/dirt",
    "minecraft/soil/farmland",
    "minecraft/soil/sand",
    "farmersdelight/soil/rich_soil_farmland",
    "mysticalagriculture/soil/inferium_farmland",
    "mysticalagriculture/soil/prudentium_farmland",
  ];

  /**
   *
   * @param {*} event
   * @param {*} type type id
   * @param {*} keep whitelist for set type 0 wipes it all.
   */
  function prune(event, type, keep) {
    if (keep.length > 0) {
      event.remove({
        type: type,
        not: { or: keep.map((id) => ({ id: "botanypots:" + id })) },
      });
    } else {
      event.remove({ type: type });
    }
  }

  ServerEvents.recipes((event) => {
    const MOD = "Botany Pots";
    GTT0.logModify(MOD);

    if (DEBUG) {
      GTT0.log("DEBUG", "BOTANY DEBUG IS TRUE, DUMPING DATA....");
      event.forEachRecipe({ mod: "botanypots" }, (r) => {
        console.info("BOTANY: " + r.getType() + " | " + r.getId());
      });
      GTT0.log("DEBUG", "BOTANY DUMP COMPLETE, WARNING! NO DATA IS REMOVED!");
    } else {
      prune(event, "botanypots:crop", KEEP_CROPS);
      prune(event, "botanypots:soil", KEEP_SOILS);
    }

    add(event);
  });

  function add(event) {}
})();
