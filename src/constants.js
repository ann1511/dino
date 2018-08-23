export const GROUND_X = 0;
export const GROUND_Y = 400;
export const GROUND_HEIGHT = 70;
export const GROUND_WIDTH = window.innerWidth;

export const CLOUD_X = 0;
export const CLOUD_Y = 100;
export const CLOUD_HEIGHT = 100;
export const CLOUD_WIDTH = window.innerWidth*1.5;
export const CLOUD_SPEED = 2;

export const DINO_X = 50;
export const DINO_SPEED = 4;
export const DINO_HEIGHT = 100;
export const DINO_WIDTH = 100;
export const DINO_Y = GROUND_Y - DINO_HEIGHT + 50; // 300
export const DINO_MAX_JUMP = GROUND_Y - DINO_HEIGHT - 200; // 200
export const DINO_STAND = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/dinosaur.png';
export const DINO_DIE = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/dinosaur_die.png';
export const DINO_RIGHT = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/dinosaur_right.png';
export const DINO_LEFT = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/dinosaur_left.png';



export const CACTUS_WIDTH = 70;
export const CACTUS_BIG_HEIGHT = 150;
export const CACTUS_SMALL_HEIGHT = 100;
export const CACTUS_BIG_Y = GROUND_Y - CACTUS_BIG_HEIGHT + 50;
export const CACTUS_SMALL_Y = GROUND_Y - CACTUS_SMALL_HEIGHT + 50;
export const CACTUS_SPEED = 4;
export const CACTUS_SMALL = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/smallCactus.png';
export const CACTUS_BIG = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/bigCactus.png';
