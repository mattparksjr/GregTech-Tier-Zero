const DISABLED_ITEMS = [
  "solclassic:basket",
  "solclassic:wicker_basket",
  "delightful:bone_knife",
  "delightful:tin_knife",
  "delightful:steel_knife",
  "delightful:brass_knife",
  "delightful:bronze_knife",
  "delightful:invar_knife",
  "delightful:lead_knife",
  "delightful:nickel_knife",
  "delightful:zinc_knife",
  "delightful:silver_knife",
  "delightful:electrum_knife",
  "delightful:cloggrum_knife",
  "delightful:froststeel_knife",
  "delightful:fluix_knife",
  "delightful:certus_quartz_knife",
  "delightful:forgotten_knife",
  "delightful:utherium_knife",
  "farmersdelight:flint_knife",
  "farmersdelight:netherite_knife",
  "farmersdelight:golden_knife",
  "farmersdelight:iron_knife",
  "farmersdelight:diamond_knife",
  "ends_delight:dragon_tooth_knife",
  "ends_delight:dragon_egg_shell_knife",
  "ends_delight:purpur_knife",
  "ends_delight:end_stone_knife",
  "supplementaries:rope",
  "aquaculture:wooden_fillet_knife",
  "aquaculture:stone_fillet_knife",
  "aquaculture:iron_fillet_knife",
  "aquaculture:gold_fillet_knife",
  "aquaculture:diamond_fillet_knife",
  "aquaculture:neptunium_fillet_knife",
  "aquaculturedelight:neptunium_knife",
  "enderio:sag_mill",
  "enderio:alloy_smelter",
  "enderio:primitive_alloy_smelter",
  "enderio:wood_gear",
  "enderio:stone_gear",
  "expatternprovider:circuit_cutter",
  "mysticalagriculture:inferium_upgrade",
  "mysticalagriculture:inferium_furnace",
  "mysticalagriculture:inferium_ore",
  "mysticalagriculture:inferium_growth_accelerator",
  "mysticalagriculture:prudentium_upgrade",
  "mysticalagriculture:prudentium_furnace",
  "mysticalagriculture:prudentium_ore",
  "mysticalagriculture:prudentium_growth_accelerator",
  "sophisticatedbackpacks:battery_upgrade",
  "sophisticatedbackpacks:mob_catcher_upgrade",
  "sophisticatedbackpacks:compacting_upgrade",
  "sophisticatedbackpacks:stack_downgrade_tier_1",
  "sophisticatedbackpacks:stack_downgrade_tier_2",
  "sophisticatedbackpacks:stack_downgrade_tier_3",
  "storagedrawers:personal_key_cofh",
  "storagedrawers:conversion_upgrade",
  "storagedrawers:portability_upgrade", // RE-ADD IN FUTURE?
];

ServerEvents.recipes((event) => {
  console.log("GTT0 - Running mass item recipe removals.");
  DISABLED_ITEMS.forEach((item) => {
    event.remove({ output: item });
  });
});

ServerEvents.tags("item", (event) => {
  console.log("GTT0: - Running mass item #hide tag");
  DISABLED_ITEMS.forEach((item) => {
    event.add("c:hidden_from_recipe_viewers", item);
  });
});
