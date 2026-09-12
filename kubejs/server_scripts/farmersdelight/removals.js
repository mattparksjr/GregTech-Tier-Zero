ServerEvents.recipes((event) => {
  console.log("GTT0: Removing Farmers Delight recipes");
  event.remove({ id: "farmersdelight:straw" });
  event.remove({ id: "farmersdelight:straw_bale" });
});
