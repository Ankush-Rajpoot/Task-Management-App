import { motion } from 'framer-motion';
import TaskCard from './TaskCard';

const CATEGORIES = ['To Do', 'On Progress', 'Done'];

function TaskBoard({ tasks, onUpdateTask, onDeleteTask, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-x-auto p-6">
      <div className="flex space-x-6 h-full">
        {CATEGORIES.map((category) => {
          const categoryTasks = tasks.filter(task => task.category === category);
          return (
            <div
              key={category}
              className="flex-1 min-w-[300px] bg-gray-100 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">
                  {category} <span className="text-gray-400 ml-2">{categoryTasks.length}</span>
                </h3>
              </div>

              <div className="space-y-4">
                {categoryTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onUpdate={onUpdateTask}
                    onDelete={onDeleteTask}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskBoard;