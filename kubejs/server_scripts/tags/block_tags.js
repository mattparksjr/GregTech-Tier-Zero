(() => {
  ServerEvents.tags("block", (event) => {
    console.log("GTT0: Adding block tags for GTT0");
    event.add("forge:mineable/wrench", "travelanchors:travel_anchor");
    event.add("gtceu:cleanroom_doors", "framedblocks:framed_door");
    event.add("gtceu:cleanroom_doors", "framedblocks:framed_iron_door");

    event.removeAll("undergarden:portal_frame_blocks");
    event.add(
      "undergarden:portal_frame_blocks",
      "rechiseled:stone_smooth_tiles",
    );
  });
})();
