import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your order for {product.name} has been confirmed.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Product:</span>
              <span>{product.name}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}