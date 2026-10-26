(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("SophS");
    remove(event);
    add(event);

    event.replaceInput(
      { input: "sophisticatedstorage:basic_tier_upgrade" },
      "minecraft:lever",
      Ingredient.of("minecraft:redstone_torch"),
    );
  });

  function remove(event) {
    GTT0.removeById(event, "SophS", []);

    GTT0.removeByOutput(event, "SophS", []);
  }

  function add(event) {
    GTT0.log("GTT0", "Adding sophisticated storage crafting recipes");
  }
})();
