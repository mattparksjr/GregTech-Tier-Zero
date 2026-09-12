ServerEvents.recipes((event) => {
  // Surgical: one specific recipe by its id
  //event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime' })

  // Nuke everything from a whole mod (e.g. strip crafting-table recipes from a mod)
  //event.remove({ mod: 'quark' })

  // Wipe an entire GT machine's recipe list
  //event.remove({ type: 'gtceu:arc_furnace' })

  // Anything using a tag as input, across ALL recipe types — careful, this is broad
  //event.remove({ input: '#forge:ingots/iron' })

  // Anything producing a given output
  // event.remove({ output: 'minecraft:cobblestone' })

  // Combine filters: only assembler recipes that use steel plates
  //event.remove({ type: 'gtceu:assembler', input: '#forge:plates/steel' })

  remove(event);
  add(event);
});

function remove(event) {
  event.remove({ output: "rechiseled:chisel" });

  event.remove({ mod: "elevatorid" });
}

function add(event) {
  const HAMMER = Ingredient.of("#gtceu:tools/crafting_hammers");
  const SAW = Ingredient.of("#gtceu:tools/crafting_saws");

  event.shaped("rechiseled:chisel", ["FP", "SH"], {
    H: HAMMER,
    F: "#gtceu:tools/crafting_files",
    P: "#forge:plates/iron",
    S: "minecraft:stick",
  });

  event
    .shaped("craftingstation:crafting_station", ["CS"], {
      C: "minecraft:crafting_table",
      S: SAW,
    })
    .damageIngredient(SAW);
}
