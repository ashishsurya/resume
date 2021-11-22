export default function EducationContainer() {
  const data = [
    {
      id: 1,
      clgName: 'IIIT Kottayam',
      span: 'Aug 2019 - Present',
      fieldName: 'B.Tech in Computer Science and Engineering',
      location: 'Kottayam, Kerala',
    },
    {
      id: 2,
      clgName: 'Sri Shirdi Sai Junior College',
      span: 'May 2017 - May 2019',
      fieldName: 'Secondary Education',
      location: 'Rajahmundry, Andhra Pradesh',
    },
  ];

  return (
    <div className='font-helvetica   p-3 mt-4'>
      <h1 className='text-xl border-b-4 pb-[1px] font-extrabold'>EDUCATION</h1>
      <div className='flex flex-col'>
        {data.map((item) => (
          <EducationComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export const EducationComponent = ({ item }) => (
  <div className='flex flex-col p-2 border-b border-gray-200'>
    <header className='flex items-center text-lg'>
      <h3 className='flex-1 font-bold'>{item.clgName}</h3>
      <p className='text-gray-700 font-extralight text-sm'>{item.span}</p>
    </header>
    <footer className='flex items-center text-base'>
      <p className='flex-1 italic font-medium'>{item.fieldName}</p>
      <p className='text-gray-700 font-extralight text-sm'>{item.location}</p>
    </footer>
  </div>
);
