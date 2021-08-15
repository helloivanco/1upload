import ReactAudioPlayer from 'react-audio-player';

export default function Audio({ url }) {
  return (
    <div className='mb-2'>
      <ReactAudioPlayer src={url} loop controls />
    </div>
  );
}
