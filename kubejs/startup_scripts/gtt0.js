Platform.mods.kubejs.name = "GTT0";

// Ore Gen Layer for Undergarden
GTCEuStartupEvents.registry("gtceu:world_gen_layer", (event) => {
  console.log("GTT0 - Registering world gen layers");
  event
    .create("undergarden")
    .targets("#undergarden:depthrock_ore_replaceables")
    .dimensions(new ResourceLocation("undergarden", "undergarden"));
});

// Dimension Markers
// Item.of("").getItem()
GTCEuStartupEvents.registry("gtceu:dimension_marker", (event) => {
  console.log("GTTO - Registering dimension markers");
  event
    .create("undergarden:undergarden")
    .iconSupplier(() => Item.of("undergarden:shard_o_lantern").getItem())
    .tier(0)
    .overrideName("Undergarden");
});

GTCEuStartupEvents.registry("gtceu:tag_prefix", (event) => {
  console.log("GTTO - Registering gt tag prefix for ores");
  event
    .create("depthrock", "ore")
    .stateSupplier(() =>
      Block.getBlock("undergarden:depthrock").defaultBlockState(),
    )
    .baseModelLocation("undergarden:block/depthrock")
    .unificationEnabled(true)
    .materialIconType(GTMaterialIconType.ore)
    .generationCondition(ItemGenerationCondition.hasOreProperty);
});
