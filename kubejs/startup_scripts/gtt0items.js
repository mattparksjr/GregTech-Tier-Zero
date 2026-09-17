StartupEvents.registry("item", (event) => {
  event
    .create("intake_slip")
    .displayName("Intake Slip")
    .maxStackSize(1)
    .rarity("epic")
    .glow(true);

  event
    .create("intake_form")
    .displayName("Intake Forms")
    .maxStackSize(1)
    .tooltip("§l§aPlease return forms to the jailer.");
});
