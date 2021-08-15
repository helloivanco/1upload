import Link from 'next/link';

import { getPost } from '../utils/retrieve';

import Display from '../components/display';
import Share from '../components/share';
import Footer from '../components/footer';

export async function getServerSideProps(context) {
  const cid = context.params.cid;
  const data = await getPost(cid);
  return {
    props: { cid, data },
  };
}

export default function Post({ cid, data }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-800 via-gray-900 to-black'>
      <Link href='/'>
        <a>
          <h1 className='mt-12 text-6xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600'>
            1upload
          </h1>
        </a>
      </Link>

      {!data ? (
        <div className='flex flex-col items-center justify-center w-full max-w-4xl flex-1 px-5 text-center'>
          <div className='font-extralight text-gray-300 text-3xl'>
            🤭 Link not found
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-top max-w-3xl flex-1 px-5 text-center'>
          <Share cid={cid} />
          <ul className='mt-5 grid gap-5'>
            {data.map((file) => (
              <li key={file.cid}>
                <Display cid={file.cid} name={file.name} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <Footer />
    </div>
  );
}
