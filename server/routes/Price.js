import express from 'express';
import {
  createPrice,
  updatePrice,
  deletePrice,
  getPrice,
  getPrices,
} from '../controllers/Price.js';

const router = express.Router();

router.post('/', createPrice);
router.put('/:id', updatePrice);
router.delete('/:id', deletePrice);
router.get('/:id', getPrice);
router.get('/', getPrices);

export default router;
