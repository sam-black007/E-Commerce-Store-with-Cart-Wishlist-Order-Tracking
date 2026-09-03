# E-Commerce Store with Cart, Wishlist & Order Tracking

A full-stack e-commerce backend API built with Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, wishlist, and order tracking.

## Features

- **User Authentication** - JWT-based authentication with secure password hashing
- **Product Management** - CRUD operations for products
- **Shopping Cart** - Add, update, remove items from cart
- **Wishlist** - Save products for later
- **Order Tracking** - Track order status and history
- **RESTful API** - Clean and well-structured endpoints

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT) + bcryptjs
- **Environment Variables:** dotenv

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Sanjai282/E-Commerce-Store-with-Cart-Wishlist-Order-Tracking.git
   cd E-Commerce-Store-with-Cart-Wishlist-Order-Tracking
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create environment file
   ```bash
   cp ecomer.env .env
   ```

4. Update `.env` with your configuration
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. Seed the database (optional)
   ```bash
   node seed.js
   ```

6. Start the server
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## Project Structure

```
├── controllers/        # Route handlers
├── ecommerce-app/      # Frontend application
├── middleware/          # Custom middleware
├── models/            # Mongoose schemas
├── routes/            # API routes
├── authController.js  # Authentication logic
├── seed.js           # Database seeder
├── server.js         # Main entry point
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Wishlist
- `GET /api/wishlist` - Get user wishlist
- `POST /api/wishlist` - Add to wishlist
- `DELETE /api/wishlist/:id` - Remove from wishlist

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update order status

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `PORT` | Server port (default: 5000) |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **GitHub:** [Sanjai282](https://github.com/Sanjai282)
- **Repository:** [E-Commerce-Store-with-Cart-Wishlist-Order-Tracking](https://github.com/Sanjai282/E-Commerce-Store-with-Cart-Wishlist-Order-Tracking)
