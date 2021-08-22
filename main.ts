namespace SpriteKind {
    export const enemy_inmune = SpriteKind.create()
    export const playerInmune = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jugador.vy = -230
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setKind(SpriteKind.playerInmune)
    Jugador.startEffect(effects.disintegrate)
    info.changeLifeBy(-1)
    music.powerDown.playUntilDone()
    sprite.setKind(SpriteKind.Player)
    Jugador.setImage(assets.image`JugadorDrch`)
})
let Jugador: Sprite = null
scene.setBackgroundImage(assets.image`Fondo-nivel1`)
tiles.setTilemap(tilemap`level1`)
Jugador = sprites.create(assets.image`JugadorDrch`, SpriteKind.Player)
Jugador.setPosition(32, 225)
scene.cameraFollowSprite(Jugador)
controller.moveSprite(Jugador, 100, 0)
Jugador.ay = 500
let enemigo1 = sprites.create(assets.image`Enemigo`, SpriteKind.Enemy)
enemigo1.setPosition(256, 232)
info.setLife(3)
