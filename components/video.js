import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoJS = (props) => {
  const videoRef = useRef(null);
  const { options } = props;

  // This seperate functional component fixes the removal of the videoelement
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = (props) => (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  );

  useEffect(() => {
    const videoElement = videoRef.current;
    let player;
    if (videoElement) {
      player = videojs(videoElement, options, () => {
        console.log('player is ready');
      });
    }
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [options]);

  return <VideoHtml />;
};

export default function Video({ url }) {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: url,
        type: 'video/mp4',
      },
    ],
  };

  return <VideoJS options={videoJsOptions} />;
}
