(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    const MOD = "Botany Pots";
    GTT0.logModify(MOD);

    event.remove({ type: "botanypots:crop" });

    add(event);
  });

  function add(event) {}
})();
