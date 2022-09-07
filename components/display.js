import { DownloadIcon } from '@heroicons/react/solid';
import { saveAs } from 'file-saver';

import Audio from './audio';
import Photo from './photo';
import Video from './video';

export default function Display({ cid, name }) {
  const extension = name.split('.').pop().toLowerCase();
  const url = process.env.NEXT_PUBLIC_GATEWAY_URL + cid;

  const _download = (e) => {
    e.preventDefault();
    saveAs(url, name);
  };

  return (
    <div className='bg-gray-700 shadow rounded-md pb-4 w-full'>
      {['png', 'jpg', 'gif', 'jpeg', 'svg', 'webp'].includes(extension) && (
        <Photo url={url} />
      )}
      {['mp4', 'mov', 'ogv', 'webm'].includes(extension) && <Video url={url} />}
      {['mp3', 'ogg', 'wav'].includes(extension) && <Audio url={url} />}
      <div className='text-gray-400 px-2 pt-3'>
        <a onClick={_download} className='mr-2'>
          <span className='inline-flex align-middle items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-blue-600'>
            <DownloadIcon
              className='inline-block h-5 w-5 hover:text-blue-800 transition ease-in duration-100 cursor-pointer'
              aria-hidden='true'
            />
          </span>
        </a>
        <a
          href={url}
          target='_blank'
          className='inline-block align-middle transition ease-in duration-100 hover:text-gray-200 hover:underline'>
          {name}
        </a>
      </div>
    </div>
  );
}
