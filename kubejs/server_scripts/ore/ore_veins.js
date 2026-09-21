GTCEuServerEvents.oreVeins((event) => {
  console.log("GTT0: Registering ore veins");

  event.add("gtt0:under_galena", (vein) => {
    vein.weight(60);
    vein.clusterSize(35);
    vein.density(0.25);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(0, 45);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
          .layer((l) => l.weight(1).mat(GTMaterials.Lead).size(1, 1)),
      ),
    );
  });

  event.add("gtt0:under_redstone", (vein) => {
    vein.weight(40);
    vein.clusterSize(35);
    vein.density(0.3);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(5, 40);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
          .layer((l) => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1)),
      ),
    );
  });

  event.add("gtt0:under_banded_iron", (vein) => {
    vein.weight(30);
    vein.clusterSize(45);
    vein.density(1.0);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(0, 40);

    vein.veinedVeinGenerator((generator) =>
      generator
        .oreBlock(GTMaterials.Goethite, 3)
        .oreBlock(GTMaterials.Limonite, 2)
        .oreBlock(GTMaterials.Hematite, 2)
        .rareBlock(GTMaterials.Gold, 1)
        .rareBlockChance(0.075)
        .veininessThreshold(0.01)
        .maxRichnessThreshold(0.2)
        .minRichness(0.7)
        .maxRichness(1.0)
        .edgeRoundoffBegin(3)
        .maxEdgeRoundoff(0.1),
    );
  });

  event.add("gtt0:under_tetrahedrite", (vein) => {
    vein.weight(70);
    vein.clusterSize(45);
    vein.density(1.0);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(40, 120);

    vein.veinedVeinGenerator((generator) =>
      generator
        .oreBlock(GTMaterials.Tetrahedrite, 4)
        .oreBlock(GTMaterials.Copper, 2)
        .rareBlock(GTMaterials.Stibnite, 1)
        .rareBlockChance(0.15)
        .veininessThreshold(0.01)
        .maxRichnessThreshold(0.2)
        .minRichness(0.7)
        .maxRichness(1.0)
        .edgeRoundoffBegin(3)
        .maxEdgeRoundoff(0.1),
    );
  });

  event.add("gtt0:under_coal", (vein) => {
    vein.weight(60);
    vein.clusterSize(42);
    vein.density(0.25);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(10, 140);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern.layer((l) => l.weight(3).mat(GTMaterials.Coal).size(2, 4)),
      ),
    );
  });

  event.add("gtt0:under_danburite", (vein) => {
    vein.weight(25);
    vein.clusterSize(30);
    vein.density(0.2);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(10, 50);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) =>
            l.weight(3).mat(GTMaterials.get("danburite")).size(2, 4),
          )
          .layer((l) => l.weight(2).mat(GTMaterials.Topaz).size(1, 1))
          .layer((l) => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1)),
      ),
    );
  });

  event.add("gtt0:under_inferium", (vein) => {
    vein.weight(50);
    vein.clusterSize(35);
    vein.density(0.3);
    vein.discardChanceOnAirExposure(0);

    vein.layer("undergarden");
    vein.dimensions(new ResourceLocation("undergarden", "undergarden"));
    vein.biomes("#gtt0:is_under");

    vein.heightRangeUniform(0, 60);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) =>
            l
              .weight(3)
              .block(() => Block.getBlock("mysticalagriculture:inferium_ore"))
              .size(2, 4),
          )
          .layer((l) => l.weight(2).mat(GTMaterials.Quartzite).size(1, 2))
          .layer((l) => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 1))
          .layer((l) => l.weight(2).mat(GTMaterials.Barite).size(1, 2)),
      ),
    );
  });

  event.add("gtt0:end_inferium", (vein) => {
    vein.weight(50);
    vein.clusterSize(35);
    vein.density(0.3);
    vein.discardChanceOnAirExposure(0);

    vein.layer("endstone");
    vein.biomes("#minecraft:is_end");

    vein.heightRangeUniform(10, 90);

    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) =>
            l
              .weight(3)
              .block(() => Block.getBlock("mysticalagriculture:inferium_ore"))
              .size(2, 4),
          )
          .layer((l) => l.weight(1).mat(GTMaterials.NetherQuartz).size(1, 1))
          .layer((l) => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 1))
          .layer((l) => l.weight(2).mat(GTMaterials.Barite).size(1, 2)),
      ),
    );
  });

  console.log("GTT0: Removing ore veins");
  event.remove("gtceu:galena_vein");
});
