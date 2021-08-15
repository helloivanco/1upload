export default function Photo({ url }) {
  return (
    <a href={url} target='_blank'>
      <div className='aspect-w-4 aspect-h-3'>
        <img className='object-cover shadow-lg rounded-md' src={url} alt='' />
      </div>
    </a>
  );
}
