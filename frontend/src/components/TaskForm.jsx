import { useState } from 'react';
import { motion } from 'framer-motion';

function TaskForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    category: 'To Do',
    duration: 3600 // 1 hour in seconds
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        title: '',
        description: '',
        category: 'To Do',
        duration: 3600
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-surface p-6 rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-background border border-gray-600 rounded-md focus:outline-none focus:border-primary"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-background border border-gray-600 rounded-md focus:outline-none focus:border-primary"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium mb-2">
          Duration (hours)
        </label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formData.duration / 3600}
          onChange={(e) => handleChange({
            target: {
              name: 'duration',
              value: e.target.value * 3600
            }
          })}
          className="w-full px-3 py-2 bg-background border border-gray-600 rounded-md focus:outline-none focus:border-primary"
          min="0.5"
          step="0.5"
          required
        />
      </div>

      <motion.button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {initialData ? 'Update Task' : 'Add Task'}
      </motion.button>
    </form>
  );
}

export default TaskForm;