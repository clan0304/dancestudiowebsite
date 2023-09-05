import Teacher from '../models/Teacher.js';

export const createTeacher = async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const updateTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateTeacher);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json('A Teacher is deleted successfully!');
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTeachers = async (req, res) => {
  try {
    const getTeachers = await Teacher.find();
    res.status(200).json(getTeachers);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTeacher = async (req, res) => {
  try {
    const getTeacher = await Teacher.findById(req.params.id);
    res.status(200).json(getTeacher);
  } catch (err) {
    res.status(500).json(err);
  }
};
