export default function Footer() {
  return (
    <footer className='flex items-center justify-center w-full h-24 text-gray-500'>
      ♾️
      <a
        className='flex items-center justify-center ml-1 mr-2 hover:underline'
        href='https://web3.storage'
        target='_blank'
        rel='noopener noreferrer'>
        Web3.Storage
      </a>
      |
      <a
        className='flex items-center justify-center ml-2 hover:underline'
        href='https://web3.storage'
        target='_blank'
        rel='noopener noreferrer'>
        Github
      </a>
    </footer>
  );
}
