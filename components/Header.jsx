export default function Header() {
  return (
    <div className='flex flex-col items-center justify-center space-y-2'>
      <h1 className='font-bold text-5xl tracking-tight'>Surya Ashish</h1>
      <div className='flex items-center space-x-2 font-serif text-sm'>
        <p className='border-r pr-2 border-gray-600'>9550117728</p>
        <a
          className='underline border-r pr-2 border-gray-600'
          href='https://www.linkedin.com/in/surya-ashish-2200961ba/'
        >
          linkedin/suryaashish
        </a>
        <a
          className='underline border-r pr-2 border-gray-600'
          href='mailto:ashishsurya126@protonmail.com'
        >
          ashishsurya126@gmail.com
        </a>
        <a className='underline' href='https://github.com/ashishsurya126'>
          github/suryaashish
        </a>
      </div>
    </div>
  );
}
