import { Router } from 'express';
const router = Router();
import { getAllProducts, getProductById, createProduct, getByCategory, searchProducts } from '../controllers/productController';

router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/category/:category', getByCategory);
router.get('/:id', getProductById);
router.post('/', createProduct);

export default router;