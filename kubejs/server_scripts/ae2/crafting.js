(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    const MOD = "AE2";
    GTT0.logModify(MOD);

    GTT0.removeTypes(event, MOD, [
      "expatternprovider:circuit_cutter",
      //"advanced_ae:reaction_chamber",
      "",
    ]);

    GTT0.removeByOutput(event, MOD, ["#ae2:knife"]);

    add(event);
  });

  function add(event) {
    event.recipes.gtceu
      .assembler("certus_knife")
      .itemInputs(
        "1x #forge:flawless_gems/certus_quartz",
        "2x #forge:rods/treated_wood",
        "1x #forge:plates/steel",
      )
      .inputFluids("#forge:soldering_alloy 75")
      .itemOutputs("ae2:certus_quartz_cutting_knife")
      .duration(200)
      .EUt(128);

    event.recipes.gtceu
      .assembler("nether_knife")
      .itemInputs(
        "1x #forge:flawless_gems/nether_quartz",
        "2x #forge:rods/treated_wood",
        "1x #forge:plates/steel",
      )
      .inputFluids("#forge:soldering_alloy 75")
      .itemOutputs("ae2:nether_quartz_cutting_knife")
      .duration(200)
      .EUt(128);
  }
})();
