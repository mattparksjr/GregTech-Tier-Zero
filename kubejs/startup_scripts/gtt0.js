Platform.mods.kubejs.name = "GTT0";

// Ore Gen Layer for Undergarden
GTCEuStartupEvents.registry("gtceu:world_gen_layer", (event) => {
  event
    .create("undergarden")
    .targets("#undergarden:depthrock_ore_replaceables")
    .dimensions("undergarden:undergarden");
});
