import { saveAs } from 'file-saver';
import { DownloadIcon } from '@heroicons/react/solid';

import Photo from './photo';
import Video from './video';
import Audio from './audio';

export default function Display({ cid, name }) {
  const extension = name.split('.').pop().toLowerCase();
  const url = process.env.NEXT_PUBLIC_GATEWAY_URL + cid;

  const _download = (e) => {
    e.preventDefault();
    saveAs(url, name);
  };

  return (
    <div className='bg-white shadow rounded-md pb-4'>
      {['png', 'jpg', 'gif', 'jpeg', 'svg'].includes(extension) && (
        <Photo url={url} />
      )}
      {['mp4', 'mov', 'ogv', 'webm'].includes(extension) && <Video url={url} />}
      {['mp3', 'ogg', 'wav'].includes(extension) && <Audio url={url} />}
      <div className='text-gray-700 px-5'>
        <a onClick={_download} className='mr-2'>
          <span className='inline-flex align-middle items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-500'>
            <DownloadIcon
              className='inline-block h-5 w-5 hover:text-blue-800 transition ease-in duration-100 cursor-pointer'
              aria-hidden='true'
            />
          </span>
        </a>
        <a
          href={url}
          target='_blank'
          className='inline-block align-middle hover:underline'>
          {name}
        </a>
      </div>
    </div>
  );
}
