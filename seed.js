const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');

const sampleProducts = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
    stock: 50,
  },
  {
    name: 'USB-C Cable',
    description: 'Durable USB-C charging and data transfer cable, 6ft length',
    price: 19.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&q=80',
    stock: 200,
  },
  {
    name: 'Premium Phone Case',
    description: 'Protective phone case with premium silicone material and drop protection',
    price: 29.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1580910051074-3924e7887dah?w=300&q=80',
    stock: 150,
  },
  {
    name: 'Portable Power Bank',
    description: '20000mAh portable charger with fast charging and dual USB ports',
    price: 39.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&q=80',
    stock: 75,
  },
  {
    name: 'Screen Protector Glass',
    description: 'Tempered glass screen protector with 9H hardness rating',
    price: 9.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&q=80',
    stock: 300,
  },
  {
    name: 'Bluetooth Speaker Pro',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80',
    stock: 60,
  },
  {
    name: 'Laptop Stand',
    description: 'Adjustable laptop stand for better ergonomics and cooling',
    price: 49.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&q=80',
    stock: 40,
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and 18-month battery',
    price: 34.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&q=80',
    stock: 100,
  },
  {
    name: 'HDMI Cable 4K',
    description: '4K HDMI cable for high-quality video transmission up to 60Hz',
    price: 14.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1621259894477-0fa34b3aba8d?w=300&q=80',
    stock: 250,
  },
  {
    name: 'HD Webcam',
    description: '1080p HD webcam with auto-focus and built-in microphone',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1598986646514-d2b59cb6d85b?w=300&q=80',
    stock: 45,
  },
  {
    name: 'Cable Organizer Set',
    description: 'Silicone cable organizer set to keep cables neat and organized',
    price: 12.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&q=80',
    stock: 180,
  },
  {
    name: 'USB Hub 4-Port',
    description: '4-port USB hub with high-speed data transfer capability',
    price: 24.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&q=80',
    stock: 120,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const result = await Product.insertMany(sampleProducts);
    console.log(` Successfully seeded ${result.length} products!`);

    process.exit(0);
  } catch (error) {
    console.error(' Error seeding database:', error.message);
    process.exit(1);
  }
}

seedDatabase();
