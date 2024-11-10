import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

function MenuPage() {
  return (
    <div>
      <Head>
        <title>Menu | Aisha Fast Food</title>
      </Head>
      <Header />
      <div className="container">
        <h1>Menu</h1>
        <ul>
          <li>Burgers</li>
          <li>Pizza</li>
          <li>Salads</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default MenuPage;
