StartupEvents.registry("item", (event) => {
  event
    .create("info_tablet")
    .displayName("Information Tablet")
    .maxStackSize(1)
    .glow(true)
    .tooltip(
      Text.of("Contains information about your situation.").italic().gold(),
    )
    .tooltip(Text.of("Right click to open.").aqua());
});
