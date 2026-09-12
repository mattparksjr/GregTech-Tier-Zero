ServerEvents.recipes((event) => {
  remove(event);
  add(event);
});

function remove(event) {
  event.remove({ id: "supplementaries:bed_from_feather_block" });
  event.remove({ id: "craftingstation:crafting_station" });
}

function add(event) {}
