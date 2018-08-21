export const LINE_X = 0;
export const LINE_Y = 400;
export const LINE_HEIGHT = 2;
export const LINE_WIDTH = window.innerWidth;

export const DINO_X = 50;
export const DINO_SPEED = 2;
export const DINO_HEIGHT = 100;
export const DINO_WIDTH = 40;
export const DINO_Y = LINE_Y - DINO_HEIGHT; // 300
export const DINO_MAX_JUMP = LINE_Y - DINO_HEIGHT - 200; // 200

export const CACTUS_WIDTH = 30;
export const CACTUS_HEIGHT = 100;
export const CACTUS_HEIGHTS = [100, 70];
export const CACTUS_YS =  CACTUS_HEIGHTS.map(height => LINE_Y - height);
export const CACTUS_Y = LINE_Y - CACTUS_HEIGHT;
export const CACTUS_SPEED = 1;

