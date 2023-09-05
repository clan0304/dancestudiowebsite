import Price from '../models/Price.js';

export const createPrice = async (req, res) => {
  try {
    const newPrice = new Price(req.body);
    const savedPrice = await newPrice.save();
    res.status(201).json(savedPrice);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePrice = async (req, res) => {
  try {
    const updatePrice = await Price.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatePrice);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePrice = async (req, res) => {
  try {
    await Price.findByIdAndDelete(req.params.id);
    res.status(200).json('A Price is deleted successfully!');
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPrices = async (req, res) => {
  try {
    const getPrices = await Price.find();
    res.status(200).json(getPrices);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPrice = async (req, res) => {
  try {
    const getPrice = await Price.findById(req.params.id);
    res.status(200).json(getPrice);
  } catch (err) {
    res.status(500).json(err);
  }
};
