import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import StarRating from './StarRating';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  // Scroll to top when component mounts or when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    navigate('/order-confirmation', {
      state: { product, selectedSize }
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-104 w-full object-cover md:w-96"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="mb-4">
                <StarRating rating={product.rating} />
              </div>
              <p className="text-xl text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Displaying Dummy Details */}
              <div className="space-y-4 mb-6">
                {product.dummyDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between text-sm text-gray-600">
                    <span>{detail.label}</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-end items-end space-y-4">
                <div className="text-3xl font-bold text-purple-600">
                  ${product.price.toFixed(2)}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
