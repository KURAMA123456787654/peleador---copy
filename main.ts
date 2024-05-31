tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    f f d d d d d d d d d d d f f 
    f d d d d d d d d d d d d d f 
    d d d d d d d d d d d d d d d 
    d d d f f f d d d f f f d d d 
    d d d f 1 f d d d f 1 f d d d 
    d d d f f f d d d f f f d d d 
    d d d d 9 d d d d d 9 d d d d 
    d d d d 9 d d d d d 9 d d d d 
    d d d d 9 d d d d d 9 d d d d 
    d d d d 9 d d d d d 9 d d d d 
    d d d d 9 d d d d d 9 d d d d 
    d d d d 9 d d d d d 9 d d d d 
    d d d d 9 d d d d d 9 d d d d 
    f d d d 9 d d d d d 9 d d d f 
    f f d d 9 d d d d d 9 d d f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
