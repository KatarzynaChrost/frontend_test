'use client';

import Head from 'next/head';
import MainContent from './components/MainContent/MainContent';

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Recruitment Task</title>
        <meta
          name='description'
          content='Recruitment task for frontend developer position'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContent />
    </div>
  );
}
