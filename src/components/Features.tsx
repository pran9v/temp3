
import React from 'react';
import { Truck, RefreshCw, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-gray-600" />,
    title: 'Free Delivery',
    description: 'Free shipping on all orders.'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-gray-600" />,
    title: 'Return Policy',
    description: 'Hassle-free returns on all orders.'
  },
  {
    icon: <Headphones className="h-8 w-8 text-gray-600" />,
    title: '24/7 Support',
    description: 'We’re here for you anytime.'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-gray-600" />,
    title: 'Secure Payment',
    description: 'Safe and secure transactions.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50"  >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white-800">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">We provide quality services</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
