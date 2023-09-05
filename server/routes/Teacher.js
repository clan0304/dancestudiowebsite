import express from 'express';
import {
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getTeachers,
  getTeacher,
} from '../controllers/Teacher.js';

const router = express.Router();

router.post('/', createTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);
router.get('/', getTeachers);
router.get('/:id', getTeacher);

export default router;
