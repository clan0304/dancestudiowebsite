import mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema(
  {
    passType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shortDesc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Price = new mongoose.model('Price', PriceSchema);
export default Price;
