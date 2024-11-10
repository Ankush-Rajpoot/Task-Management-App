import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['To Do', 'On Progress', 'Done'],
    default: 'To Do'
  },
  priority: {
    type: String,
    enum: ['low', 'high'],
    default: 'low'
  },
  deadline: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // in seconds
    required: true,
    min: 1800 // minimum 30 minutes
  },
  startTime: {
    type: Date
  },
  isExpired: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Method to check if task is expired
taskSchema.methods.checkExpiration = function() {
  if (this.startTime && this.duration) {
    const endTime = new Date(this.startTime.getTime() + this.duration * 1000);
    return new Date() > endTime;
  }
  return false;
};

export default mongoose.model('Task', taskSchema);