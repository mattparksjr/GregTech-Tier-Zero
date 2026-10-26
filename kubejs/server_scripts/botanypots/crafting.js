(() => {
  const GTT0 = global.GTT0;

  const KEEP_CROPS = [
    // Vanilla
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

    // Farmers Delight
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

    // Neapolitan, Corn, Delight, Mystical Agri
    "neapolitan/crop/strawberries",
    "neapolitan/crop/banana_plant",
    "neapolitan/crop/mint",
    "neapolitan/crop/vanilla_pods",
    "neapolitan/crop/adzuki_beans",
    "delightful/crop/cantaloupe",
    "corn_delight/crop/corn",
    "mysticalagriculture/crop/inferium",

    // Trees
    "botanytrees:minecraft/oak",
    "botanytrees:minecraft/spruce",
    "botanytrees:minecraft/birch",
    "botanytrees:minecraft/jungle",
    "botanytrees:minecraft/acacia",
    "botanytrees:minecraft/dark_oak",
    "botanytrees:minecraft/mangrove",
    "botanytrees:minecraft/cherry",
    "botanytrees:minecraft/azalea",
    "botanytrees:minecraft/flowering_azalea",
    "botanytrees:gtceu/rubber",
    "botanytrees:quark/ancient",
    "botanytrees:quark/sunny_blossom",
    "botanytrees:quark/warm_blossom",
    "botanytrees:quark/frosty_blossom",
    "botanytrees:quark/fiery_blossom",
    "botanytrees:quark/serene_blossom",
    "botanytrees:undergarden/smogstem",
    "botanytrees:undergarden/grongle",
    "botanytrees:undergarden/wigglewood",
  ];

  const KEEP_SOILS = [
    "minecraft/soil/dirt",
    "minecraft/soil/farmland",
    "minecraft/soil/sand",
    "undergarden/soil/deepsoil",
    "farmersdelight/soil/rich_soil_farmland",
    "mysticalagriculture/soil/inferium_farmland",
    "mysticalagriculture/soil/prudentium_farmland",
  ];

  /**
   * Prune recipes
   * @param {*} event
   * @param {*} type type id
   * @param {*} keep whitelist for set type 0 wipes it all.
   */
  function prune(event, type, keep) {
    const keepFilters = keep.map((id) => ({
      id: id.includes(":") ? id : "botanypots:" + id,
    }));
    if (keepFilters.length > 0) {
      event.remove({ type: type, not: { or: keepFilters } });
    } else {
      event.remove({ type: type });
    }
  }

  ServerEvents.recipes((event) => {
    const MOD = "Botany Pots";
    GTT0.logModify(MOD);

    if (GTT0.DEBUG) {
      GTT0.log("DEBUG", "BOTANY DEBUG IS TRUE, DUMPING DATA....");
      event.forEachRecipe({ mod: "botanypots" }, (r) => {
        console.info("BOTANY: " + r.getType() + " | " + r.getId());
      });

      event.forEachRecipe({ mod: "botanytrees" }, (r) => {
        console.info("TREES: " + r.getType() + " | " + r.getId());
      });

      GTT0.log("DEBUG", "BOTANY DUMP COMPLETE, WARNING! NO DATA IS REMOVED!");
    } else {
      prune(event, "botanypots:crop", KEEP_CROPS);
      prune(event, "botanypots:soil", KEEP_SOILS);
    }

    add(event);
  });

  function add(event) {
    // TODO, str8 up dont work
    GTT0.log("Botany Pots", "Adding crops to pots!");
    event.recipes.botanypots.crop(
      "mysticalagriculture:sticky_seed_seeds",
      ["inferium_farmland"],
      { block: "mysticalagriculture:sticky_seed_crop" },
      [
        Item.of("mysticalagriculture:sticky_seed_essence")
          .withChance(100)
          .withRolls(1, 3),
      ],
      1200,
      1,
    );
  }
})();
