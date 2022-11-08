// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000171717060707070707081a1a1a1a1a1a1717170d0e0e0e0e0e091a1a1a1a1a1a1717170d0e0e0e0e0e091a1a1a1a1a1a1717170d0e0e0e0e0e091a1a1a1a1a1a1717170c0b0b0b0b0b0a1a1a1a1a1a1a050505050505050505050505050505050115040415040404040f0404040404030116040416040404040f1311131414190116161616040404040f100f10040403011310040f0404040404040404040403010f04040f0404040404040404040403010f04040f1314141414110404040403010f0404121004040404120f04040403010f0404040404040404040f0404040301121414110404040404040f04040403020404040f0f161616160f1004040418`, img`
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 . 2 2 . 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 2 . 2 2 . 2 . . . . . . . 
2 . . . . 2 2 2 2 . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . . . . . 2 2 2 2 2 
2 . 2 2 . . 2 2 2 2 . . 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
2 . . . . 2 2 2 2 2 2 . 2 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.builtin.forestTiles1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.swamp.swampTile9,sprites.swamp.swampTile14,sprites.swamp.swampTile8,sprites.swamp.swampTile12,sprites.swamp.swampTile6,sprites.swamp.swampTile7,sprites.swamp.swampTile16,sprites.swamp.swampTile13,sprites.castle.tileGrass2,sprites.builtin.forestTiles15,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
