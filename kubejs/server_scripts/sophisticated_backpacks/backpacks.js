(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Sophisticated Backpacks");

    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeById(event, "Sophisticated Backpacks", [
      "sophisticatedbackpacks:backpack",
      "sophisticatedbackpacks:copper_backpack",
      "sophisticatedbackpacks:iron_backpack_from_copper",
      "sophisticatedbackpacks:iron_backpack",
      "sophisticatedbackpacks:gold_backpack",
      "sophisticatedbackpacks:diamond_backpack",
      "sophisticatedbackpacks:netherite_backpack",
      "sophisticatedbackpacks:upgrade_base",
    ]);
  }

  function add(event) {
    event.recipes.gtceu
      .assembler("upgrade_base")
      .itemInputs(
        "2x #forge:rings/bronze",
        "3x minecraft:leather",
        "2x farmersdelight:rope",
        "2x #forge:rods/iron",
      )
      .itemOutputs("sophisticatedbackpacks:upgrade_base")
      .duration(80)
      .EUt(32);

    event.shaped("sophisticatedbackpacks:backpack", ["SLS", "LBL", "FPF"], {
      S: "#forge:screws/bronze",
      L: "minecraft:leather",
      B: "gtceu:wood_crate",
      F: "farmersdelight:rope",
      P: "#forge:plates/red_alloy",
    });

    event.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: "sophisticatedbackpacks:copper_backpack",
        },
      ],
      pattern: ["SLS", "LBL", "FPF"],
      key: {
        S: { tag: "#forge:screws/wrought_iron" },
        L: { item: "minecraft:leather" },
        B: { item: "sophisticatedbackpacks:backpack" },
        F: { item: "farmersdelight:rope" },
        P: { item: "sophisticatedstorage:iron_chest" },
      },
      result: { item: "sophisticatedbackpacks:copper_backpack" },
    });

    event.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: "sophisticatedbackpacks:iron_backpack",
        },
      ],
      pattern: ["SLS", "LBL", "FPF"],
      key: {
        S: { tag: "forge:screws/steel" },
        L: { item: "minecraft:leather" },
        B: { item: "sophisticatedbackpacks:copper_backpack" },
        F: { item: "farmersdelight:rope" },
        P: { tag: "forge:plates/rose_gold" },
      },
      result: { item: "sophisticatedbackpacks:iron_backpack" },
    });

    event.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: "sophisticatedbackpacks:gold_backpack",
        },
      ],
      pattern: ["SLS", "LBL", "FPF"],
      key: {
        S: { tag: "forge:screws/aluminium" },
        L: { item: "minecraft:leather" },
        B: { item: "sophisticatedbackpacks:iron_backpack" },
        F: { item: "gtceu:carbon_fibers" },
        P: { tag: "forge:plates/blue_alloy" },
      },
      result: { item: "sophisticatedbackpacks:gold_backpack" },
    });

    event.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: "sophisticatedbackpacks:diamond_backpack",
        },
      ],
      pattern: ["SLS", "LBL", "FPF"],
      key: {
        S: { tag: "forge:screws/stainless_steel" },
        L: { item: "minecraft:leather" },
        B: { item: "sophisticatedbackpacks:gold_backpack" },
        F: { item: "gtceu:carbon_fibers" },
        P: { tag: "forge:plates/polytetrafluoroethylene" },
      },
      result: { item: "sophisticatedbackpacks:diamond_backpack" },
    });

    event.custom({
      type: "sophisticatedbackpacks:backpack_upgrade",
      conditions: [
        {
          type: "sophisticatedcore:item_enabled",
          itemRegistryName: "sophisticatedbackpacks:netherite_backpack",
        },
      ],
      pattern: ["SLS", "LBL", "FPF"],
      key: {
        S: { tag: "forge:screws/stainless_steel" },
        L: { item: "minecraft:leather" },
        B: { item: "sophisticatedbackpacks:diamond_backpack" },
        F: { item: "gtceu:carbon_fibers" },
        P: { tag: "forge:plates/polytetrafluoroethylene" },
      },
      result: { item: "sophisticatedbackpacks:netherite_backpack" },
    });
  }
})();
