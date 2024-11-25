import { FaGithub, FaNpm, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <main className='flex flex-col items-center justify-center w-full h-screen text-center text-white border border-neutral-800 bg-neutral-900'>
      <p className='text-sm md:text-2xl'>
        <span className='text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text'>VeilUI</span> documentation is currently under
        construction. Coming soon! ✨
      </p>
      <div className='flex items-center justify-center gap-2 text-xs text-blue-400 md:text-base'>
        <span className='flex items-center gap-1'>
          <FaGithub />
          <a
            href='https://github.com/clxakz'
            className='underline'
            target='_blank'
            rel='noopener noreferrer'>
            Github
          </a>
        </span>
        •
        <span className='flex items-center gap-1'>
          <FaNpm />
          <a
            href='https://www.npmjs.com/package/veilui'
            className='underline'
            target='_blank'
            rel='noopener noreferrer'>
            NPM
          </a>
        </span>
        •
        <span className='flex items-center gap-1'>
          <FaInstagram />
          <a
            href='https://www.instagram.com/clx.akzy/'
            className='underline'
            target='_blank'
            rel='noopener noreferrer'>
            Instagram
          </a>
        </span>
      </div>
    </main>
  );
}

export default App;
