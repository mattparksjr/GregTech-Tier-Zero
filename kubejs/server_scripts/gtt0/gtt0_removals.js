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
  "endsdelight:dragon_tooth_knife",
  "endsdelight:dragon_egg_shell_knife",
  "endsdelight:purpur_knife",
  "endsdelight:end_stone_knife",
  "supplementaries:rope",
  "aquaculture:wooden_fillet_knife",
  "aquaculture:stone_fillet_knife",
  "aquaculture:iron_fillet_knife",
  "aquaculture:gold_fillet_knife",
  "aquaculture:diamond_fillet_knife",
  "aquaculture:neptunium_fillet_knife",
  "enderio:sag_mill",
  "enderio:alloy_smelter",
  "enderio:wood_gear",
  "enderio:stone_gear",
];

const HIDDEN_MODS = ["itemfilters", "ftbquests", "ftbfiltersystem"];

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
  HIDDEN_MODS.forEach((item) => {
    event.add("c:hidden_from_recipe_viewers", item);
  });
});
