(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    const MOD = "EnderIO";
    GTT0.logModify(MOD);

    GTT0.removeTypes(event, MOD, ["enderio:alloying", "enderio:sag_milling"]);

    GTT0.removeByOutput(event, MOD, ["enderio:flour"]);

    add(event);
  });

  function add(event) {
    event
      .shapeless(Item.of("enderio:flour", 1), ["minecraft:wheat", GTT0.MORTAR])
      .damageIngredient(GTT0.MORTAR, 2);
  }
})();
