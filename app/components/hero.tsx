import Image from 'next/image';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to Aisha Fast Food</h1>
          <p>Delicious food, quick service.</p>
          <button>Order Now</button>
        </div>
        <div className="hero-images">
          <Image
            src="/images/set-fast-food-white-background_1023984-527.avif"
            alt="Hero pic-1"
            width={400}
            height={300}
          />
          <Image
            src="/images/OIP.jpeg"
            alt="Hero Image 2"
            width={400}
            height={300}
          />
          <Image
            src="/images/OIP (1).jpeg"
            alt="Hero Image 3"
            width={400}
            height={300}
/>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
