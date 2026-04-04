import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [{
    type: String,
  }],
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
