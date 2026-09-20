StartupEvents.registry("item", (event) => {
  event
    .create("intake_slip")
    .displayName("Intake Slip")
    .maxStackSize(1)
    .rarity("epic")
    .glow(true)
    .tooltip("§l§aShift+Right-click to be randomly teleported!");

  event
    .create("intake_form")
    .displayName("Filled Intake Forms")
    .maxStackSize(1)
    .tooltip("§l§aPlease return forms to the jailer.");
});
