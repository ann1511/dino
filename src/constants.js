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

export const CACTUS_WIDTH = 30;
export const CACTUS_HEIGHT = 100;
export const CACTUS_HEIGHTS = [100, 70];
export const CACTUS_YS =  CACTUS_HEIGHTS.map(height => GROUND_Y - height);
export const CACTUS_Y = GROUND_Y - CACTUS_HEIGHT + 40;
export const CACTUS_SPEED = 4;

