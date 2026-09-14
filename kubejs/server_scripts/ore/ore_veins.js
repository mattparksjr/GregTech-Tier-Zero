() => {
  GTCEuServerEvents.oreVeins((event) => {
    console.log("========== GT ORE VEINS ==========");

    event.modifyAll((id, vein) => {
      console.log("");
      console.log("===================================");
      console.log("ID: " + id);
      console.log("===================================");

      // Basic properties
      try {
        console.log("Weight: " + vein.weight());
      } catch (e) {
        console.log("Weight: ERROR " + e);
      }

      try {
        console.log("Density: " + vein.density());
      } catch (e) {
        console.log("Density: ERROR " + e);
      }

      try {
        console.log("Cluster Size: " + vein.clusterSize());
      } catch (e) {
        console.log("Cluster Size: ERROR " + e);
      }

      try {
        console.log("Layer: " + vein.layer());
      } catch (e) {
        console.log("Layer: ERROR " + e);
      }

      try {
        console.log("Dimensions: " + vein.dimensionFilter());
      } catch (e) {
        console.log("Dimensions: ERROR " + e);
      }

      try {
        console.log("Y Range: " + vein.range());
      } catch (e) {
        console.log("Y Range: ERROR " + e);
      }

      try {
        console.log("Discard Chance: " + vein.discardChanceOnAirExposure());
      } catch (e) {
        console.log("Discard Chance: ERROR " + e);
      }

      // Generator
      try {
        const generator = vein.veinGenerator();

        console.log("Generator: " + generator);

        if (generator != null) {
          console.log("Generator Class: " + generator.getClass().getName());
        }
      } catch (e) {
        console.log("Generator: ERROR " + e);
      }

      console.log("-----------------------------------");
    });

    console.log("========== END GT ORE VEINS ==========");

    (event.add("gtt0:under_galena"),
      (vein) => {
        vein.weight(80);
        vein.clusterSize();
        vein.density();
        vein.discardChanceOnAirExposure(0);

        vein.layer("");
        vein.dimensions("");
        vein.biomes("");
      });
  });
};
