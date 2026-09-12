ServerEvents.recipes((event) => {
  remove(event);
  add(event);
});

function remove(event) {
  event.remove({ id: "minecraft:crafting_table" });
  event.remove({ output: "#minecraft:beds" });
}

function add(event) {
  event.campfireCooking(
    "#minecraft:logs_that_burn",
    "gtceu:small_ash_dust",
    0,
    600,
  );

  const MELLET = Ingredient.of("#gtceu:tools/crafting_mallets");

  Color.DYE.forEach((color) => {
    event
      .shaped(`minecraft:${color}_bed`, ["CCC", "PPP", "FHF"], {
        C: `minecraft:${color}_carpet`,
        P: "#minecraft:planks",
        H: "#gtceu:tools/crafting_hammers",
        F: MELLET,
      })
      .damageIngredient(MELLET);
  });

  event.shaped("minecraft:crafting_table", ["FF", "PP"], {
    P: "#minecraft:logs",
    F: "minecraft:flint",
  });
}
