ServerEvents.recipes((event) => {
  event.remove({ id: "sophisticatedbackpacks:backpack" });
  event.remove({ id: "sophisticatedbackpacks:copper_backpack" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack_from_copper" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack" });
  event.remove({ id: "sophisticatedbackpacks:gold_backpack" });
  event.remove({ id: "sophisticatedbackpacks:diamond_backpack" });
  event.remove({ id: "sophisticatedbackpacks:netherite_backpack" });

    event.shaped("sophisticatedbackpacks:backpack",[
        "SLS",
        "LBL",
        "FPF"
    ], {
        S: "#forge:screws/wrought_iron",
        L: "minecraft:leather",
        B: "gtceu:wood_crate",
        F: "minecraft:string",
        P: "#forge:plates/red_alloy",
    });


})