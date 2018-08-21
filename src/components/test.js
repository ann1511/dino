import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';

import Dino from './components/Dino';
import Cactus from './components/Cactus';

import * as constants from './constants';
import DinoImage, {dinosaurs} from './components/DinoImage';



ReactDOM.render(
  <DinoImage
    avatarUrl = {dinosaurs.avatarUrl} />,
  document.getElementById('root')
);