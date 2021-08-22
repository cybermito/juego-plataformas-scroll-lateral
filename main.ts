controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jugador.vy = -230
})
let Jugador: Sprite = null
scene.setBackgroundImage(assets.image`Fondo-nivel1`)
tiles.setTilemap(tilemap`level1`)
Jugador = sprites.create(assets.image`JugadorDrch`, SpriteKind.Player)
Jugador.setPosition(32, 225)
scene.cameraFollowSprite(Jugador)
controller.moveSprite(Jugador, 100, 0)
Jugador.ay = 500
