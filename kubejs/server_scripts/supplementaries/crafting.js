(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("Supplementaries");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeByOutput(event, "Supplementaries", [
      "supplementaries:bed_from_feather_block",
      "supplementaries:lunch_basket",
    ]);
  }

  function add(event) {
    event.shaped("supplementaries:lunch_basket", ["RWR", "SCS", "SSS"], {
      S: "farmersdelight:straw_bale",
      R: "farmersdelight:rope",
      W: "#forge:rods/wooden",
      C: "#forge:chests/wooden",
    });
  }
})();
