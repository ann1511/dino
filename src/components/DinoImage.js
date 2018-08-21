import React from 'react';

export const dinosaurs = {
    avatarUrl: 'http://placekitten.com/g/64/64'
};

function DinoImage(props) {
  return (
    <img src={props.avatarUrl}/>
  );
}
 export default DinoImage;