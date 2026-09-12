StartupEvents.registry("item", (event) => {
  event
    .create("intake_slip")
    .displayName("Intake Slip")
    .maxStackSize(1)
    .rarity("epic")
    .glow(true);
});
