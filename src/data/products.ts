import { Product } from '../types/product';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export const products: Product[] = [
  {
    id: 'puffer-jacket',
    name: 'Girls Winter Puffer Jacket',
    description: 'A warm winter jacket designed to keep girls safe and comfortable in cold weather.',
    price: 23.37,
    image: image1,
    rating: 5,
    sizes: ['0-3M', '3-6M', '6-9M', '9-12M'],
    dummyDetails: [
      { label: 'Material', value: 'Polyester' },
      { label: 'Weight', value: '1.2kg' },
      { label: 'Care Instructions', value: 'Machine wash cold' },
      { label: 'Brand', value: 'KiddoJacket' },
      { label: 'Color', value: 'Pink' },
    ]
  },
  {
    id: 'fur-hooded-coat',
    name: 'Girls/boys Faux Mink Fur Hooded Coat',
    description: 'A soft faux mink fur hooded coat, offering a luxurious feel and gentle warmth for all-day comfort',
    price: 29.41,
    image: image2,
    rating: 4.5,
    sizes: ['0-3M', '3-6M', '6-9M', '9-12M'],
    dummyDetails: [
      { label: 'Material', value: 'Faux Mink Fur' },
      { label: 'Weight', value: '1.5kg' },
      { label: 'Care Instructions', value: 'Hand wash cold' },
      { label: 'Brand', value: 'KiddoJacket' },
      { label: 'Color', value: 'Brown' },
    ]
  },
  {
    id: 'fuzzy-hooded',
    name: 'Girls Hooded Fuzzy Mid-Length Jacket',
    description: 'A cozy and stylish mid-length jacket with a hood, featuring soft fuzzy fabric and convenient pockets, perfect for fall and winter.',
    price: 45.99,
    image: image3,
    rating: 5,
    sizes: ['3-6M', '6-9M', '9-12M', '12-18M'],
    dummyDetails: [
      { label: 'Material', value: 'Cotton & Polyester blend' },
      { label: 'Weight', value: '0.9kg' },
      { label: 'Care Instructions', value: 'Dry clean only' },
      { label: 'Brand', value: 'KiddoJacket' },
      { label: 'Color', value: 'Khaki' },
    ]
  },
  {
    id: 'winter-set',
    name: 'Winter Warmth Set',
    description: 'Girls Fashion Diamond Textured Long Sleeve Teddy Jacket, comfortable and warm long Hooded Plush coat winter clothing.',
    price: 12.81,
    image: image4,
    rating: 4.8,
    sizes: ['6-9M', '9-12M', '12-18M', '18-24M'],
    dummyDetails: [
      { label: 'Material', value: 'Fleece' },
      { label: 'Weight', value: '1.0kg' },
      { label: 'Care Instructions', value: 'Machine wash cold' },
      { label: 'Brand', value: 'KiddoJacket' },
      { label: 'Color', value: 'White' },
    ]
  }
];
