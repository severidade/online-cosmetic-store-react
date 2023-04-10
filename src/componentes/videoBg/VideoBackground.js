import React from 'react';
import ReactPlayer from 'react-player';

import styles from './VideoBackground.module.css';

const VideoBackground = ({ src }) => (
  <div className={ styles.video_background_container }>
    <ReactPlayer
      className={ styles.video_background }
      url={ src }
      playing
      loop
      muted
      controls={ false }
      speed="2"
      width="100%"
      height="200%"
    />
  </div>
);

export default VideoBackground;
