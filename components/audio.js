import ReactAudioPlayer from 'react-audio-player';

export default function Audio({ url }) {
  return <ReactAudioPlayer src={url} loop controls />;
}
