() => {
  ServerEvents.recipes((event) => {
    console.log("GTT0: Modifiying EnderIO recipes");
    remove(event);
    add(event);
  });

  function remove(event) {
    event.remove({ type: "enderio:alloying" });
    event.remove({ type: "enderio:sag_milling" });
  }

  function add(event) {
    const MORTAR = Ingredient.of("#gtceu:tools/crafting_mortars");

    event
      .shapelesss(Item.of("enderio:flour", 1), ["minecraft:wheat", MORTAR])
      .damageIngredient(MORTAR);
  }
};
