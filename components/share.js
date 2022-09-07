import { LinkIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Share({ cid }) {
  const url = process.env.NEXT_PUBLIC_BASE_URL + cid;

  const [value, setValue] = useState(url);

  const handleFocus = (event) => {
    event.target.select();
    navigator.clipboard.writeText(url);
    setValue('Copied!');
    setTimeout(() => {
      setValue(url);
      event.target.blur();
    }, 1000);
  };

  return (
    <div className='w-full mt-5 relative rounded-md shadow-sm'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <LinkIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
      </div>
      <input
        type='url'
        name='share'
        id='share'
        className='block w-full pl-10 border-black rounded-md text-gray-500 bg-gray-300'
        value={value}
        onFocus={handleFocus}
        readOnly
      />
    </div>
  );
}
