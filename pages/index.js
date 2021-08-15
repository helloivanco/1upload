import { useState } from 'react';
import { useRouter } from 'next/router';

import Footer from '../components/footer';
import { storeWithProgress, storeJSON } from '../utils/storage';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Home() {
  const [message, setMessage] = useState(
    '⬆️ <span class="filepond--label-action">Upload files here</span>'
  );
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-800 via-gray-900 to-black'>
      <main className='flex flex-col items-center justify-center w-full max-w-4xl flex-1 px-5 text-center'>
        <h1 className='text-6xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600'>
          1upload
        </h1>
        <h2 className='mt-1 text-gray-400'>interplanetary file hosting 🚀</h2>
        <div className='w-full pt-5'>
          <FilePond
            storeAsFile={false}
            server={{
              process: async (
                fieldName,
                file,
                metadata,
                load,
                error,
                progress,
                abort,
                transfer,
                options
              ) => {
                setMessage('Uploading...');
                load(await storeWithProgress([file], progress, uploadedFiles));
              },
            }}
            onprocessfiles={async () => {
              setMessage('Processing...');
              console.log(uploadedFiles);
              router.push(await storeJSON(uploadedFiles));
            }}
            allowMultiple={true}
            allowRevert={false}
            allowProcess={false}
            disabled={false}
            credits={false}
            name='files'
            labelIdle={message}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
