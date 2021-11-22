import Head from 'next/head';
import ResumeContainer from '../components/ResumeContainer';

export default function Home() {
  return (
    <div className='w-[794px] h-[1123px] mx-auto  p-3'>
      <Head>
        <title>Resume - Surya Ashish</title>
      </Head>
      <ResumeContainer />
    </div>
  );
}
