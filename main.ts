input.onGesture(Gesture.LogoUp, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    player.change(LedSpriteProperty.Y, -1)
})
let player: game.LedSprite = null
let enemy = game.createSprite(randint(0, 4), randint(0, 4))
player = game.createSprite(0, 0)
let point = 0
basic.forever(function () {
    if (player.isTouching(enemy)) {
        point += 1
        basic.showNumber(point)
        enemy.delete()
        enemy = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
