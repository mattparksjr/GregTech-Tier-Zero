(() => {
  const GTT0 = global.GTT0;

  ServerEvents.recipes((event) => {
    GTT0.logModify("GregTech");
    remove(event);
    add(event);
  });

  function remove(event) {
    GTT0.removeByOutput(event, "GregTech", ["gtceu:firebricks"]);
  }

  function add(event) {
    console.log("GTT0: Adding Greg recipes");
    event.recipes.gtceu
      .compressor("firebricks")
      .itemInputs("4x gtceu:firebrick")
      .itemOutputs("gtceu:firebricks")
      .EUt(16)
      .duration(80);
  }
})();
