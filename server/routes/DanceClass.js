import express from 'express';
import {
  createDanceClass,
  updateDanceClass,
  deleteDanceClass,
  getDanceClasses,
  getDanceClass,
} from '../controllers/DanceClass.js';

const router = express.Router();

router.post('/', createDanceClass);
router.put('/:id', updateDanceClass);
router.delete('/:id', deleteDanceClass);
router.get('/', getDanceClasses);
router.get('/:id', getDanceClass);

export default router;
