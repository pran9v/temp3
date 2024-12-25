import { Product } from '../types/product';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export const products: Product[] = [
  {
    id: 'Dynamic Style Boosters Shoes',//'puffer-jacket'
    name: 'Dynamic Style Boosters Shoes',
    description: ' Versatile shoes for gym, walking, and casual styling, blending ultimate comfort with bold design',
    price: 23.37,
    image: image1,
    rating: 5,

    sizes: ['6', '7', '8', '9', '10', '11', '12'],
dummyDetails: [
  { label: 'Material', value: 'Breathable Mesh and Synthetic Leather' },
  { label: 'Weight', value: '800g' },
  { label: 'Care Instructions', value: 'Wipe clean with a damp cloth' },
  { label: 'Brand', value: 'Dynamic Wear' },
  { label: 'Color', value: 'Black and White' },
]

  },
  {
    id: 'Elite Comfort Kicks',
    name: 'Elite Comfort Kicks for Kids',
    description: 'High-quality kids’s shoes designed for durability, comfort, and style. Perfect for active little feet, offering excellent grip and support.',
    price: 34.99,
    image: image2,
    rating: 4.7,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    dummyDetails: [
      { label: 'Material', value: 'Premium Synthetic Leather and Mesh' },
      { label: 'Weight', value: '800g' },
      { label: 'Care Instructions', value: 'Wipe clean with a damp cloth' },
      { label: 'Brand', value: 'KidStride' },
      { label: 'Color', value: 'Black with Reflective Accents' },
    ]
  },
  {
    id: 'Velocity Step Sneakers',
  name: 'Velocity Step Sneakers',
  description: 'Stylish and lightweight sneakers designed for active kids. These breathable shoes offer excellent grip, support, and durability for all-day comfort and fun.',
  price: 39.99,
  image: image3,
  rating: 4.8,
  sizes: ['6', '7', '8', '9', '10', '11', '12'],
  dummyDetails: [
    { label: 'Material', value: 'Mesh and PU Leather' },
    { label: 'Weight', value: '0.7kg' },
    { label: 'Care Instructions', value: 'Hand wash or wipe clean' },
    { label: 'Brand', value: 'KidStride' },
    { label: 'Color Options', value: 'Black, White, Pink' },
  ]
  },
  {
    id: 'Power Play Shoes for Boys',
    name: 'Power Play Shoes for Boys',
    description: 'Dynamic and stylish sneakers designed for active boys. With a sporty look and durable build, these shoes ensure comfort and support for every adventure.',
    price: 28.99,
    image: image4,
    rating: 4.9,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    dummyDetails: [
      { label: 'Material', value: 'PU Leather and Breathable Mesh' },
      { label: 'Weight', value: '0.75kg' },
      { label: 'Care Instructions', value: 'Wipe clean with a damp cloth' },
      { label: 'Brand', value: 'KidStride' },
      { label: 'Color', value: 'Red, White, and Navy' },
      { label: 'Sole Type', value: 'Shock-absorbing Rubber Sole' },
      { label: 'Closure', value: 'Velcro Strap with Elastic Laces' },
      { label: 'Special Feature', value: 'Anti-slip Grip for Extra Safety' },
    ]
  }
];
