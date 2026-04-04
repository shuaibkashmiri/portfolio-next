import mongoose from 'mongoose';

const SiteSettingsSchema = new mongoose.Schema({
  aboutText: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    default: "Shoaib Mushtaq Bhat",
  },
  heroName: {
    type: String,
    default: "Shoaib",
  },
  heroTitle: {
    type: String,
    required: true,
  },
  heroPrefixText: {
    type: String,
    default: "I'm",
  },
  heroSubtitle: {
    type: String,
    required: true,
  },
  heroAnimatedTexts: [{
    type: String,
  }],
  profileImage: {
    type: String,
    required: true,
  },
  aboutImage: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    default: '/logodf.png',
  },
  contactEmail: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
  },
  linkedinUrl: {
    type: String,
  },
  instagramUrl: {
    type: String,
  },
  facebookUrl: {
    type: String,
  },
  yearsOfExperience: {
    type: String,
    default: '3+',
  },
  projectsCompleted: {
    type: String,
    default: '20+',
  },
  cvPath: {
    type: String,
    default: '/cv_shoaib.pdf',
  },
}, {
  timestamps: true,
});

export default mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);
