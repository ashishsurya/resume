export default function SkillsContainer() {
  const data = [
    {
      id: 1,
      title: 'Languages',
      list: ['Javascript(TS)', ' Python', ' Kotlin', ' C/C++', ' Dart', ' SQL', " GraphQL"],
    },
    {
      id: 2,
      title: 'Frameworks',
      list: ['React.js', ' React-Native', ' Flutter', ' Material-UI'],
    },
    {
      id: 3,
      title: 'Libraries',
      list: ['Pandas', ' Numpy', ' Scikit-Learn', ' Redux', " Express.js"],
    },
  ];
  return (
    <div className='   p-3 mt-4'>
      <h1 className='text-xl border-b-4 pb-[1px] font-extrabold'>SKILLS</h1>
      <div className='mt-2 p-2'>
        {data.map((item) => (
          <HelperComponent key={item.id} title={item.title} list={item.list} />
        ))}
      </div>
    </div>
  );
}

const HelperComponent = ({ title, list }) => (
  <div className='flex items-center space-x-2'>
    <p className='font-bold'>{title} : </p>
    <p>{list?.toString(' ')}</p>
  </div>
);
