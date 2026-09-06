PlayerEvents.loggedIn(event => {
  const player = event.player

  if (!player.persistentData.getBoolean('got_start_items')) {
    player.persistentData.putBoolean('got_start_items', true)
    player.give(Item.of('kubejs:intake_slip'))
  }
})

ItemEvents.rightClicked(event => {
  const { item, player, level } = event

  if (item.id !== 'kubejs:intake_slip') return

  const lines = [
    Text.of('[ARBITER TERMINAL — INTAKE RECORD]').color('gold').bold(true),
    Text.of('――――――――――――――――――――――――――――――').color('dark_gray'),
    Text.of('Inmate ').color('white')
      .append(Text.of(player.name.string).color('yellow'))
      .append(Text.of(', your intake has been processed.').color('white')),
    Text.of('Inmate ID is ').color('white')
      .append(Text.of('INMATE-0690').color('yellow')),
    Text.of('Sentencing classification: ').color('white')
      .append(Text.of('TIER ZERO').color('red').bold(true)),
    Text.of('Tier Zero is considered the lowest classification. Good luck.').color('gray').italic(true),
    Text.of('Discharge can be achieved by completing "the project."').color('gray').italic(true),
    Text.of('— ARBITER, Site Overseer').color('dark_gray').italic(true),
    Text.of('――――――――――――――――――――――――――――――').color('dark_gray'),
    Text.of('Tip: ').color('aqua').bold(true)
      .append(Text.of('Open your quest book with (`) to review your path to restitution.').color('aqua').bold(false))
  ]

  lines.forEach(line => player.tell(line))
  player.playSound('minecraft:block.beacon.activate', 0.4, 1.6)

  if (!player.isCreative()) {
    item.shrink(1)
  }

  event.cancel()
})