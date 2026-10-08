global.GTT0 = {
  log(mod, msg) {
    console.log(`[GTT0:${mod}] ${msg}`);
  },

  logModify(mod) {
    console.log(`[GTTO] Modifiying ${mod}'s recipes`);
  },

  HAMMER: Ingredient.of("#gtceu:tools/crafting_hammers"),
  MALLET: Ingredient.of("#gtceu:tools/crafting_mallets"),
  FILE: Ingredient.of("#gtceu:tools/crafting_files"),
  SAW: Ingredient.of("#gtceu:tools/crafting_saws"),
  SCREWDRIVER: Ingredient.of("#gtceu:tools/crafting_screwdrivers"),
  MORTAR: Ingredient.of("#gtceu:tools/crafting_mortars"),

  /**
   * Remove all mod recipes
   * @param {*} event
   * @param {string} mod
   * @param {string[]} ids
   */
  removeByMod(event, mod, ids) {
    ids.forEach((id) => event.remove({ mod: id }));
    this.log(mod, `Removed ${ids.length} recipe(s) by mod id`);
  },

  /**
   * Remove crafting recipes by output item
   * @param {*} event
   * @param {string} mod
   * @param {string[]} outputs
   */
  removeByOutput(event, mod, outputs) {
    outputs.forEach((output) => event.remove({ output: output }));
    this.log(mod, `Removed ${outputs.length} recipe(s) by output`);
  },

  /**
   * Remove crafting recipes by input
   * @param {*} event
   * @param {string} mod
   * @param {string[]} inputs
   */
  removeByInput(event, mod, inputs) {
    inputs.forEach((input) => event.remove({ input: input }));
    this.log(mod, `Removed ${inputs.length} recipe(s) by input`);
  },

  /**
   * Remove a batch of recipes by their exact recipe id
   * @param {*} event
   * @param {string} mod
   * @param {string[]} ids
   */
  removeById(event, mod, ids) {
    ids.forEach((id) => event.remove({ id: id }));
    this.log(mod, `Removed ${ids.length} recipe(s) by id`);
  },

  /**
   * Mass remove recipe by type
   * @param {*} event
   * @param {string} mod
   * @param {string[]} ids
   */
  removeTypes(event, mod, ids) {
    ids.forEach((id) => event.remove({ type: id }));
    this.log(mod, `Removed ${ids.length} recipe types`);
  },

  /**
   * A basic item to block compressor recipe
   * @param {*} event
   * @param {string} id
   * @param {string} block
   * @param {string} item
   * @param {*} count
   */
  basicBlockCompressor(event, id, block, item, count) {
    const n = count === undefined ? 9 : count;
    event.recipes.gtceu
      .compressor(id)
      .itemInputs(`${n}x ${item}`)
      .itemOutputs(block)
      .EUt(8)
      .duration(100);
  },

  /**
   * A batch of a basic compressor recipies
   * @param {*} event
   * @param {string} mod
   * @param {{id: string, block: string, item: string}[]} recipes
   * @param {*} count
   */
  basicBlockCompressorBatch(event, mod, recipes, count) {
    recipes.forEach((r) => {
      this.basicBlockCompressor(event, r.id, r.block, r.item, count);
    });

    this.log(mod, `Added ${recipes.length} compressor batch recipe(s)`);
  },
};
