export const GROUND_X = 0;
export const GROUND_Y = 500;
export const GROUND_HEIGHT = 70;
export const GROUND_WIDTH = window.innerWidth;

export const CLOUD_Y = 100;
export const CLOUD_HEIGHT = 150;
export const CLOUD_WIDTH = 1.2*window.innerWidth;
export const CLOUD_SPEED = 2;
export const CLOUD1_X = 0;
export const CLOUD2_X = CLOUD_WIDTH;
export const CLOUD_URL = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/cloud.png';

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

export const GAME_OVER_TEXT_WIDTH = 400;
export const GAME_OVER_TEXT_X = (window.innerWidth - GAME_OVER_TEXT_WIDTH)/2;
export const GAME_OVER_TEXT_Y = 250;
export const GAME_OVER_TEXT_HEIGHT = 100;
export const GAME_OVER_TEXT_URL = 'https://raw.githubusercontent.com/ann1511/dino/master/src/img/gameOverText.png';