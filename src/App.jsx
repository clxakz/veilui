import { FaGithub, FaNpm, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <main className='w-full h-screen bg-neutral-900 text-white flex justify-center items-center'>
      <div>
        <p className='text-2xl'>
          <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>VeilUI</span> documentation is currently under
          construction. Coming soon! ✨
        </p>
        <div className='flex items-center justify-center gap-2 text-blue-400'>
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
      </div>
    </main>
  );
}

export default App;
