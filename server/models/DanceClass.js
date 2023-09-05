import mongoose from 'mongoose';

const DanceClassSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    finishTime: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DanceClass = new mongoose.model('DanceClass', DanceClassSchema);
export default DanceClass;
