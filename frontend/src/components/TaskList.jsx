import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { FaTrash, FaEdit } from 'react-icons/fa';

function TaskList({ tasks, onUpdateTask, onDeleteTask, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No tasks in this category
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-surface p-4 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                <p className="text-gray-400 mb-2">{task.description}</p>
                <p className="text-sm text-gray-500">
                  Duration: {task.duration / 3600} hours
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onUpdateTask(task)}
                  className="p-2 text-primary hover:text-secondary transition-colors"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-2 text-red-500 hover:text-red-400 transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default TaskList;