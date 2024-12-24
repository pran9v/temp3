import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import { formatPrice } from '../utils/formatters';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="w-full h-68">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="text-2xl font-bold text-purple-600">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}