JEIEvents.hideItems((event) => {
  console.log("GTT0: Hiding items from JEI");
  event.hide("@itemfilters");
  event.hide("@ftbquests");
  event.hide("@ftbfiltersystem");

  event.hide("solclassic:basket");
  event.hide("solclassic:wicker_basket");
});
