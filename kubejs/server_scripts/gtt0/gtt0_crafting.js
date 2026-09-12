ServerEvents.recipes((event) => {
  console.log("GTT0: GTTO DEBUG DEBUG DEBUG");
  remove(event);
  add(event);
});

function remove(event) {
  console.log("GTT0: Removing GTT0 crafting recipes");
  event.remove({ output: "rechiseled:chisel" });
  event.remove({ id: "craftingstation:crafting_station" });
  event.remove({ mod: "elevatorid" });
}

function add(event) {
  console.log("GTT0: Adding GTT0 crafting recipes");

  const HAMMER = "#gtceu:tools/crafting_hammers";
  const SAW = "#gtceu:tools/crafting_saws";
  const FILE = "#gtceu:tools/crafting_files";

  event
    .shaped("rechiseled:chisel", ["FP", "SH"], {
      H: HAMMER,
      F: FILE,
      P: "#forge:plates/iron",
      S: "minecraft:stick",
    })
    .damageIngredient(HAMMER);

  event
    .shaped("craftingstation:crafting_station", ["CS"], {
      C: "minecraft:crafting_table",
      S: SAW,
    })
    .damageIngredient(SAW);
}
