export default function ProjectsContainer() {
  const data = [
    {
      id: 1,
      title: 'Todo Manager',
      points: [
        'This is a simple todo-application built using React for frontend and used firebase for the backend.',
        "Authentication is also implented in this app using Firebase-Auth",
        "Learned how to use ContextAPI and managed the state"
      ],
    },
    {
      id: 2,
      title: "UI-Clones using React",
      points: [
        "Built ui clones of facebook, instagram, Google Keep, Gmail",
        "Gmail and instargam have some basic functionality like authentication,creating new posts/mails"
      ]
    }
  ];
  return (
    <div className='p-3 mt-4'>
      <h1 className='text-xl border-b-4 pb-[1px] font-extrabold'>PROJECTS</h1>
      <div className='mt-2 p-2 space-y-2'>
        {data.map((item) => (
          <HelperComponent
            key={item.id}
            title={item.title}
            points={item.points}
          />
        ))}
      </div>
    </div>
  );
}

const HelperComponent = ({ title, points }) => (
  <div>
    <h3 className='font-bold'>{title}</h3>
    <section className="px-2">{points && points.map((point) => <li className="text-sm">{point}</li>)}</section>
  </div>
);
