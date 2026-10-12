(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    const MOD = "EnderIO";
    GTT0.logModify(MOD);

    GTT0.removeTypes(event, MOD, [
      "enderio:alloying",
      "enderio:sag_milling",
      "enderio:primitive_alloy_smelting",
    ]);

    GTT0.removeByOutput(event, MOD, [
      "enderio:flour",
      "enderio:dark_steel_sword",
    ]);

    add(event);
  });

  function add(event) {
    event
      .shapeless(Item.of("enderio:flour", 1), ["minecraft:wheat", GTT0.MORTAR])
      .damageIngredient(GTT0.MORTAR, 2);
  }
})();
