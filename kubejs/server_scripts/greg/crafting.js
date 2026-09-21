(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing Greg recipes");

    event.remove({ output: "gtceu:firebricks" });
  }

  function add(event) {
    console.log("GTT0: Adding Greg recipes");
    event.recipes.gtceu
      .compressor("firebricks")
      .itemInputs("4x gtceu:firebrick")
      .itemOutputs("gtceu:firebricks")
      .EUt(2)
      .duration(100);
  }
})();
