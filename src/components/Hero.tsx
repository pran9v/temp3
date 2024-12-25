import React from 'react';
import landingImage from '../assets/landingImage.jpg';

export default function Hero() {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen w-full bg-cover relative"
      style={{ backgroundImage: `url(${landingImage})`, backgroundPosition: 'center right' }}
    >
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full lg:w-1/2 text-left pb-12 lg:pb-16 px-6 lg:px-12">
        <div className="text-white">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Step Into <span className="text-yellow-400">Comfort Style & Fun</span>
          </h1>
          <p className="mt-4 text-xl">
            Elevate every step with shoes that blend style, durability, and unmatched comfort, 
            designed to keep you moving effortlessly.
          </p>
          <div className="mt-6">
            {/* <button
              onClick={handleScrollToProducts}
              className="bg-white-200 text-black-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-md"  style={{
                backgroundColor: 'white'}}
            >
              Add to Bag
            </button> */}
<button
  onClick={handleScrollToProducts}
  className="text-white px-8 py-3 rounded-full text-lg font-semibold bg-transparent hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out shadow-md border-2 border-white"
>
 Shop Now
</button>


          </div>
        </div>
      </div>
    </section>
  );
}
