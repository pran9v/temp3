import React from 'react';
import { Heart, Leaf, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-8 w-8 text-purple-600" />,
    title: 'Comfort First',
    description: 'Designed for maximum comfort and movement.'
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    title: 'Safe & Tested',
    description: 'All products meet strict safety standards.'
  },
  {
    icon: <Truck className="h-8 w-8 text-purple-600" />,
    title: 'Fast Shipping',
    description: 'Free shipping on orders over $50.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Quality baby jackets you can trust
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}