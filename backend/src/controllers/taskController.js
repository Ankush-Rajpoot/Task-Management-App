import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createTask = async (req, res) => {
  try {
    console.log("Request Body:", req.body);  // Log request body to see what data is being passed
    const { title, description, priority, deadline, duration } = req.body;

    if (duration < 1800) {
      return res.status(400).json({ message: 'Duration must be at least 30 minutes (1800 seconds).' });
    }

    const task = new Task({
      title,
      description,
      priority,
      deadline,
      duration, // in seconds
      category: 'To Do',
    });

    const savedTask = await task.save();
    console.log("Saved Task:", savedTask);  // Log saved task to verify saving was successful
    res.status(201).json(savedTask);
  } catch (error) {
    console.error("Error creating task:", error.message);  // Log the error if saving fails
    res.status(400).json({ message: error.message });
  }
};



export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const startTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.startTime = new Date();
    task.category = 'On Progress';
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.category = 'Done';
    task.completedAt = new Date();
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const checkExpiredTasks = async () => {
  try {
    const tasks = await Task.find({
      category: 'On Progress',
      isExpired: false,
      startTime: { $exists: true }
    });

    for (const task of tasks) {
      if (task.checkExpiration()) {
        task.isExpired = true;
        await task.save();
      }
    }
  } catch (error) {
    console.error('Error checking expired tasks:', error);
  }
};