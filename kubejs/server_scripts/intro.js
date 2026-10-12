const GTT0 = global.GTT0;

ItemEvents.firstRightClicked("kubejs:info_tablet", (event) => {
  const player = event.player;

  if (player.persistentData.getBoolean("intro_seen")) return;

  GTT0.log(
    "Intro",
    player.displayName.getString() + " has right clicked intro item",
  );
  ItemUIFactory.INSTANCE.openUI(event.player, event.hand, "intro_ui");
});

PlayerEvents.loggedIn((event) => {
  const player = event.player;

  if (player.persistentData.getBoolean("got_intro")) return;

  player.persistentData.putBoolean("got_intro", true);
  player.give(Item.of("kubejs:info_tablet"));
});

function createIntroUI(player) {
  const W = 260;
  const H = 190;

  let root = new WidgetGroup();
  root.setSize(W, H);
  root.setBackground(ResourceBorderTexture.BORDERED_BACKGROUND);

  const IMG_W = 64;
  const IMG_H = 64;
  let image = new ImageWidget();
  const TextTextureWidget = Java.loadClass(
    "com.lowdragmc.lowdraglib.gui.widget.TextTextureWidget",
  );
  const ResourceTexture = Java.loadClass(
    "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture",
  );

  const texture = ResourceTexture["(java.lang.String)"](
    "gtt0:textures/gui/icon.png",
  );

  image.setSize(IMG_W, IMG_H);
  image.setSelfPosition((W - IMG_W) / 2, 6);
  image.setImage(texture);
  root.addWidgets(image);

  const TEXT_W = W - 20;
  let body = new TextTextureWidget();
  body.setSelfPosition(10, 76);
  body.setSize(TEXT_W, 80);
  body.setText(
    "Welcome to Tier Zero. " +
      "You have been sent here as punishment for " +
      "Your crimes. You must complete THE PROJECT " +
      "in order to return home. If you think you " +
      "have what it takes, your quest log can be " +
      "opened with '`' or in your inventory. ",
  );
  body.textureStyle((texture) => {
    texture.setType(TextType.LEFT);
    texture.setWidth(TEXT_W);
  });
  root.addWidgets(body);

  const BTN_W = 60;
  let button = new ButtonWidget();
  button.setSelfPosition((W - BTN_W) / 2, 162);
  button.setSize(BTN_W, 20);
  let bg = ResourceBorderTexture.BUTTON_COMMON;
  let hover = bg.copy().setColor(ColorPattern.CYAN.color);
  let text = new TextTexture("Got it");
  button.setButtonTexture(bg, text);
  button.setClickedTexture(hover, text);
  button.setOnPressCallback((clickData) => {
    GTT0.log("Intro", "Button clicked");
    Client.setScreen(null);
  });
  root.addWidgets(button);

  return root;
}

LDLibUI.item("intro_ui", (e) => {
  GTT0.log("Intro", "intro_ui handler fired");
  let ui = createIntroUI(e.player);
  GTT0.log("Intro", "intro_ui built");
  e.success(ui);
});
