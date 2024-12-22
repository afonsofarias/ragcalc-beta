// Group constants for better organization
export const size = {
    ALL: 0,
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
}

export const race = {
    ALL: 0,
    // MONSTER RACES
    FORMLESS: 1,
    BRUTE: 2,
    PLANT: 3,
    INSECT: 4,
    FISH: 5,
    DEMON: 6,
    DEMI_HUMAN: 7,
    ANGEL: 8,
    DRAGON: 9,
    UNDEAD: 10,
    // PLAYER RACES
    HUMAN: 11,
    DORAM: 12,
}

export const property = {
    ALL: 0,
    NEUTRAL: 1,
    WATER: 2,
    EARTH: 3,
    FIRE: 4,
    WIND: 5,
    POISON: 6,
    HOLY: 7,
    DARK: 8,
    GHOST: 9,
    UNDEAD: 10,
}

export const type = { // MONSTER TYPE
    ALL: 0,
    NORMAL: 1,
    BOSS: 2,
    GUARDIAN: 3,
}

export const weaponClass = {
    // Dagger
    // 1-handed Sword
    // 2-handed Sword
    // 1-handed Spear
    // 2-handed Spear
    // 1-handed Axe
    // 2-handed Axe
    // Mace
    MACE: 3,
    // 1-handed Staff
    ONE_HANDED_STAFF: 1,
    // 2-handed Staff
    TWO_HANDED_STAFF: 2,
    // Bow
    // Knuckle
    KNUCKLE: 4,
    // Musical Instrument
    // Whip
    // Book
    BOOK: 5,
    // Katar
    // Revolver
    // Rifle
    // Gatling Gun
    // Shotgun
    // Grenade Launcher
    // Fuuma Shuriken
}

const propTableHoly = [
    [100, 100, 100, 100, 100,  75,   0, 125, 100, 125],
    [100, 100, 100, 100, 100,  75,   0, 150, 100, 150],
    [100, 100, 100, 100, 100,  50,   0, 175, 100, 175],
    [100, 100, 100, 100, 100,  50,   0, 200, 100, 200]
];

const propTableWater = [
    [100,  25, 100, 150,  90, 150, 100, 100, 100, 100],
    [100,   0, 100, 175,  80, 150, 100, 100, 100, 100],
    [100,   0, 100, 200,  70, 125, 100, 100, 100, 100],
    [100,   0, 100, 200,  60, 125, 100, 100, 100, 100]
];

// Export property table
export const propTable = [
    [],
    propTableWater,
    [],
    [],
    [],
    [],
    propTableHoly,
    [],
    [],
    [],
];
