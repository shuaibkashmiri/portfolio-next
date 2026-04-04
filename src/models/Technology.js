import mongoose from 'mongoose';

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Technology || mongoose.model('Technology', TechnologySchema);
