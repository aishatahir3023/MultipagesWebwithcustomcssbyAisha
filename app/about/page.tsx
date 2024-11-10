import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

function AboutPage() {
  return (
    <div>
      <Head>
        <title>About | Aisha Fast Food</title>
      </Head>
      <Header />
      <div className="container">
        <h1>About Us</h1>
        <p>At Aisha Fast Food, we are passionate about serving delicious, high-quality food with fast and friendly service. Our journey began with a simple idea: to offer a quick and convenient dining experience without compromising on flavor or quality. What started as a small food venture has now grown into a beloved brand, known for its delicious offerings and commitment to customer satisfaction.</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
