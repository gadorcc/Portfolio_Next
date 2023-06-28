import Sidenav from '../components/Sidenav';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import Contact from '@/components/Contact';
import 'react-complex-tree/lib/style-modern.css';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Gador's Portfolio</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidenav />
      </div>
    </>
  );
};

export default Home;
