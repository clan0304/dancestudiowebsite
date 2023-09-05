import DanceClass from '../models/DanceClass.js';

export const createDanceClass = async (req, res) => {
  try {
    const newDanceClass = new DanceClass(req.body);
    const savedDanceClass = await newDanceClass.save();
    res.status(201).json(savedDanceClass);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateDanceClass = async (req, res) => {
  try {
    const updateDanceClass = await DanceClass.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateDanceClass);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteDanceClass = async (req, res) => {
  try {
    await DanceClass.findByIdAndDelete(req.params.id);
    res.status(200).json('A DanceClass is deleted successfully!');
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getDanceClasses = async (req, res) => {
  try {
    const getDanceClasses = await DanceClass.find();
    res.status(200).json(getDanceClasses);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getDanceClass = async (req, res) => {
  try {
    const getDanceClass = await DanceClass.findById(req.params.id);
    res.status(200).json(getDanceClass);
  } catch (err) {
    res.status(500).json(err);
  }
};
