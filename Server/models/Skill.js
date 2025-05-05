const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  interests: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Skill', skillSchema);
