(() => {
  ServerEvents.tags("worldgen/biome", (event) => {
    console.log("GTT0: Adding biome tags for GTT0");
    event.add("gtt0:is_under", [
      "undergarden:acient_sea",
      "barren_abyss",
      "blood_mushroom_bog",
      "dead_sea",
      "dense_forest",
      "forgotton_field",
      "frostfields",
      "frosty_smogstem_forest",
      "gronglegrowth",
      "icy_sea",
      "indigo_mushroom_bog",
      "ink_mushroom_bog",
      "smog_spires",
      "smogstem_forest",
      "veil_mushroom_bog",
      "wigglewood_forest",
    ]);
  });
})();
