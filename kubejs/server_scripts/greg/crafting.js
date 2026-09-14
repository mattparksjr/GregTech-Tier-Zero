(() => {
  ServerEvents.recipes((event) => {
    remove(event);
    add(event);
  });

  function remove(event) {
    console.log("GTT0: Removing Greg recipes");
  }

  function add(event) {
    console.log("GTT0: Adding Greg recipes");
  }
})();
