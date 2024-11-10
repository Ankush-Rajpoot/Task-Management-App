import { motion } from 'framer-motion';
import { FaEllipsisH, FaClock } from 'react-icons/fa';

export default function TaskCard({ task, onUpdate, onDelete }) {
  const priorityColors = {
    low: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
    completed: 'bg-green-100 text-green-800'
  };

  const priorityClass = task.category === 'Done' 
    ? priorityColors.completed 
    : priorityColors[task.priority];

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityClass}`}>
          {task.category === 'Done' ? 'Completed' : task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        <button className="text-gray-400 hover:text-gray-600">
          <FaEllipsisH />
        </button>
      </div>

      <h4 className="font-semibold text-gray-900 mb-2">{task.title}</h4>
      <p className="text-sm text-gray-600 mb-4">{task.description}</p>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <FaClock />
          <span>{formatDuration(task.duration)}</span>
        </div>
        <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
      </div>
    </motion.div>
  );
}