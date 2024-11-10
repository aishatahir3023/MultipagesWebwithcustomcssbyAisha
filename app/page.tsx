import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import HeroSection from './components/hero';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Aisha Fast Food</title>
        <meta name="description" content="Fast food restaurant" />
      </Head>
    
      <Header />
           <HeroSection />
      <Footer />
    </div>
  );
}

export default HomePage;

