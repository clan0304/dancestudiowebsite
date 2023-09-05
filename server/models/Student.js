import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Product: {
      type: String,
    },
  },
  { timestamps: true }
);

const Student = new mongoose.model('Student', StudentSchema);
export default Student;
