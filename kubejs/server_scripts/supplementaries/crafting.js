ServerEvents.recipes((event) => {
  console.log("GTT0: Modifiying Supplementaries recipes");
  remove(event);
  add(event);
});

function remove(event) {
  event.remove({ id: "supplementaries:bed_from_feather_block" });
}

function add(event) {}
