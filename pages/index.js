import Head from 'next/head';
import ResumeContainer from '../components/ResumeContainer';

export default function Home() {
  return (
    <div className='w-[794px] h-[1123px] mx-auto border p-3'>
      <ResumeContainer />
    </div>
  );
}
