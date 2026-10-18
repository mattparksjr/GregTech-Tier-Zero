(() => {
  const GTT0 = global.GTT0;
  const MOD = "Storage Drawers";

  const REMOVE_IDS = [
    "storagedrawers:upgrade_template",
    "storagedrawers:copper_storage_upgrade",
    "storagedrawers:iron_storage_upgrade",
    "storagedrawers:gold_storage_upgrade",
    "storagedrawers:diamond_storage_upgrade",
    "storagedrawers:emerald_storage_upgrade",
    "storagedrawers:netherite_storage_upgrade",
    "storagedrawers:obsidian_storage_upgrade",
    "storagedrawers:redstone_upgrade",
    "storagedrawers:max_redstone_upgrade",
    "storagedrawers:min_redstone_upgrade",
    "storagedrawers:void_upgrade",
    "storagedrawers:hopper_upgrade",
    "storagedrawers:one_stack_upgrade",
    "storagedrawers:magnet_upgrade",
    "storagedrawers:magnet_upgrade_2",
    "storagedrawers:magnet_upgrade_3",
    "storagedrawers:pull_upgrade",
    "storagedrawers:pull_upgrade_2",
    "storagedrawers:pull_upgrade_3",
    "storagedrawers:push_upgrade",
    "storagedrawers:push_upgrade_2",
    "storagedrawers:push_upgrade_3",
    "storagedrawers:remote_upgrade",
    "storagedrawers:remote_group_upgrade",
    "storagedrawers:remote_group_upgrade_inc",
    "storagedrawers:fill_level_upgrade",
    "storagedrawers:illumination_upgrade",
    "storagedrawers:conversion_upgrade",
    "storagedrawers:balance_fill_upgrade",
    "storagedrawers:portability_upgrade",
    "storagedrawers:drawer_key",
    "storagedrawers:personal_key",
    "storagedrawers:quantify_key",
    "storagedrawers:priority_key",
    "storagedrawers:connection_key",
    "storagedrawers:shroud_key",
    "storagedrawers:suspend_key",
    "storagedrawers:keybutton_concealment",
    "storagedrawers:keybutton_drawer",
    "storagedrawers:keybutton_quantify",
    "storagedrawers:detached_drawer",
  ];

  ServerEvents.recipes((event) => {
    GTT0.logModify(MOD);
    GTT0.removeById(event, MOD, REMOVE_IDS);
    add(event);
  });

  /**
   * Shorthand assembler
   * @param {} event
   * @param {string} id recipe id
   * @param {*} inputs
   * @param {*} outputs
   * @param {integer} circuit circuit #
   * @param {integer} eu power
   * @param {integer} duration duration
   * @param {*} fluid
   */
  function assemble(event, id, inputs, outputs, eu, duration, fluid) {
    const r = event.recipes.gtceu.assembler(`gtt0/storagedrawers/${id}`);
    r.itemInputs.apply(r, inputs);
    r.itemOutputs.apply(r, outputs);
    r.EUt(eu).circuit(4).duration(duration);
    if (fluid) r.inputFluids(fluid);
  }

  function add(event) {
    assemble(
      event,
      "upgrade_template",
      ["8x minecraft:stick", "1x #storagedrawers:drawers"],
      ["1x storagedrawers:upgrade_template"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "upgrade_template_treated",
      ["4x gtceu:treated_wood_rod", "1x #storagedrawers:drawers"],
      ["2x storagedrawers:upgrade_template"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "drawer_key",
      [
        "1x #forge:rings/gold",
        "2x #forge:plates/gold",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:drawer_key"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "illumination_upgrade",
      [
        "2x minecraft:glow_ink_sac",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:upgrade_template",
      ],
      ["2x storagedrawers:illumination_upgrade"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "one_stack_upgrade",
      [
        "4x gtceu:flint_dust",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:one_stack_upgrade"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "copper_storage_upgrade",
      [
        "4x #forge:plates/wrought_iron",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:copper_storage_upgrade"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "iron_storage_upgrade",
      [
        "4x #forge:plates/steel",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:copper_storage_upgrade",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:iron_storage_upgrade"],
      GTT0.LV,
      100,
    );

    assemble(
      event,
      "hopper_upgrade",
      [
        "1x minecraft:hopper",
        "4x gtceu:treated_wood_rod",
        "4x #forge:plates/steel",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:hopper_upgrade"],
      GTT0.MV,
      100,
    );

    assemble(
      event,
      "gold_storage_upgrade",
      [
        "4x #forge:plates/blue_alloy",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:iron_storage_upgrade",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:gold_storage_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "redstone_upgrade",
      [
        "4x #forge:dusts/redstone",
        "2x #forge:plates/red_alloy",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:redstone_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "max_redstone_upgrade",
      [
        "3x minecraft:redstone_block",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:max_redstone_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "min_redstone_upgrade",
      [
        "3x #forge:dusts/redstone",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:min_redstone_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "magnet_upgrade",
      [
        "4x #forge:plates/wrought_iron",
        "4x minecraft:iron_bars",
        "1x gtceu:lv_item_magnet",
        "1x storagedrawers:hopper_upgrade",
      ],
      ["storagedrawers:magnet_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "pull_upgrade",
      [
        "4x #forge:plates/steel",
        "4x #forge:plates/red_alloy",
        "1x minecraft:hopper",
        "1x gtceu:mv_robot_arm",
      ],
      ["storagedrawers:pull_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "push_upgrade",
      [
        "4x #forge:plates/steel",
        "4x #forge:plates/red_alloy",
        "1x minecraft:hopper",
        "1x gtceu:mv_conveyor_module",
      ],
      ["storagedrawers:push_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "fill_level_upgrade",
      [
        "1x storagedrawers:upgrade_template",
        "1x minecraft:repeater",
        "2x #forge:plates/steel",
        "2x minecraft:redstone_torch",
      ],
      ["storagedrawers:fill_level_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "balance_fill_upgrade",
      [
        "2x #forge:plates/rose_gold",
        "1x minecraft:comparator",
        "4x gtceu:treated_wood_rod",
        "1x gtceu:mv_robot_arm",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:balance_fill_upgrade"],
      GTT0.MV,
      150,
    );

    assemble(
      event,
      "personal_key",
      ["1x storagedrawers:drawer_key", "1x minecraft:name_tag"],
      ["storagedrawers:personal_key"],
      GTT0.MV,
      150,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "quantify_key",
      ["1x storagedrawers:drawer_key", "1x minecraft:writable_book"],
      ["storagedrawers:quantify_key"],
      GTT0.MV,
      150,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "priority_key",
      ["1x storagedrawers:drawer_key", "1x minecraft:compass"],
      ["storagedrawers:priority_key"],
      GTT0.MV,
      150,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "connection_key",
      ["1x storagedrawers:drawer_key", "1x minecraft:hopper"],
      ["storagedrawers:connection_key"],
      GTT0.MV,
      150,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "shroud_key",
      ["1x storagedrawers:drawer_key", "1x minecraft:ender_eye"],
      ["storagedrawers:shroud_key"],
      GTT0.MV,
      150,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "suspend_key",
      ["1x storagedrawers:drawer_key", "1x minecraft:lever"],
      ["storagedrawers:suspend_key"],
      GTT0.MV,
      150,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "keybutton_concealment",
      ["1x storagedrawers:shroud_key", "1x minecraft:stone_button"],
      ["storagedrawers:keybutton_concealment"],
      GTT0.MV,
      100,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "keybutton_drawer",
      ["1x storagedrawers:drawer_key", "1x minecraft:stone_button"],
      ["storagedrawers:keybutton_drawer"],
      GTT0.MV,
      100,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "keybutton_quantify",
      ["1x storagedrawers:quantify_key", "1x minecraft:stone_button"],
      ["storagedrawers:keybutton_quantify"],
      GTT0.MV,
      100,
      "gtceu:glue 250",
    );

    assemble(
      event,
      "diamond_storage_upgrade",
      [
        "1x #forge:flawless_gems/diamond",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:gold_storage_upgrade",
        "1x storagedrawers:upgrade_template",
        "4x #forge:plates/stainless_steel",
      ],
      ["storagedrawers:diamond_storage_upgrade"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "emerald_storage_upgrade",
      [
        "1x #forge:flawless_gems/emerald",
        "4x gtceu:treated_wood_rod",
        "1x storagedrawers:diamond_storage_upgrade",
        "1x storagedrawers:upgrade_template",
        "4x #forge:plates/titanium",
      ],
      ["storagedrawers:emerald_storage_upgrade"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "void_upgrade",
      [
        "4x minecraft:obsidian",
        "4x gtceu:treated_wood_rod",
        "2x minecraft:ender_pearl",
        "1x trashcans:item_trash_can",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:void_upgrade"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "magnet_upgrade_2",
      [
        "4x #forge:plates/steel",
        "4x #forge:plates/electrum",
        "2x #forge:plates/polyethylene",
        "1x storagedrawers:magnet_upgrade",
      ],
      ["storagedrawers:magnet_upgrade_2"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "magnet_upgrade_3",
      [
        "4x #forge:plates/electrum",
        "1x gtceu:hv_item_magnet",
        "2x #forge:plates/polytetrafluoroethylene",
        "1x storagedrawers:magnet_upgrade_2",
      ],
      ["storagedrawers:magnet_upgrade_3"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "pull_upgrade_2",
      [
        "4x #forge:plates/rose_gold",
        "4x #forge:plates/red_alloy",
        "1x storagedrawers:pull_upgrade",
        "1x gtceu:hv_robot_arm",
      ],
      ["storagedrawers:pull_upgrade_2"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "push_upgrade_2",
      [
        "4x #forge:plates/rose_gold",
        "4x #forge:plates/red_alloy",
        "1x storagedrawers:push_upgrade",
        "1x gtceu:hv_conveyor_module",
      ],
      ["storagedrawers:push_upgrade_2"],
      GTT0.HV,
      200,
    );

    assemble(
      event,
      "netherite_storage_upgrade",
      [
        "8x minecraft:netherite_ingot",
        "4x gtceu:treated_wood_rod",
        "1x #forge:exquisite_gems/emerald",
        "1x storagedrawers:emerald_storage_upgrade",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:netherite_storage_upgrade"],
      GTT0.EV,
      300,
    );

    assemble(
      event,
      "obsidian_storage_upgrade",
      [
        "2x #forge:dense_plates/obsidian",
        "4x #forge:plates/obsidian",
        "1x storagedrawers:upgrade_template",
      ],
      ["storagedrawers:obsidian_storage_upgrade"],
      GTT0.EV,
      300,
    );

    assemble(
      event,
      "pull_upgrade_3",
      [
        "4x #forge:plates/black_steel",
        "1x storagedrawers:pull_upgrade_2",
        "1x gtceu:ev_robot_arm",
        "1x #gtceu:circuits/hv",
      ],
      ["storagedrawers:pull_upgrade_3"],
      GTT0.EV,
      300,
    );

    assemble(
      event,
      "push_upgrade_3",
      [
        "4x #forge:plates/black_steel",
        "1x storagedrawers:push_upgrade_2",
        "1x gtceu:ev_conveyor_module",
        "1x #gtceu:circuits/hv",
      ],
      ["storagedrawers:push_upgrade_3"],
      GTT0.EV,
      300,
    );

    assemble(
      event,
      "remote_group_upgrade",
      [
        "2x #gtceu:circuits/hv",
        "1x enderchests:ender_chest",
        "2x storagedrawers:remote_upgrade",
        "8x gtceu:nichrome_double_wire",
      ],
      ["storagedrawers:remote_group_upgrade"],
      GTT0.EV,
      200,
    );

    assemble(
      event,
      "remote_upgrade",
      [
        "2x #gtceu:circuits/mv",
        "1x enderchests:ender_chest",
        "1x storagedrawers:upgrade_template",
        "8x gtceu:nichrome_double_wire",
      ],
      ["storagedrawers:remote_upgrade"],
      GTT0.EV,
      150,
    );
  }
})();
