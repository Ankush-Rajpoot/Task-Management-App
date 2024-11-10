import { FaClock, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

function Sidebar({ tasks }) {
  const expiredTasks = tasks.filter(task => new Date(task.deadline) < new Date()).length;
  const completedTasks = tasks.filter(task => task.category === 'Done').length;

  return (
    <div className="w-64 bg-white border-r flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-8">Task Manager</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaClock className="text-red-500" />
              <div>
                <p className="text-gray-500">Expired Tasks</p>
                <p className="text-2xl font-bold">{expiredTasks}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-500" />
              <div>
                <p className="text-gray-500">All Active Tasks</p>
                <p className="text-2xl font-bold">{tasks.length}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-green-500" />
              <div>
                <p className="text-gray-500">Completed Tasks</p>
                <p className="text-2xl font-bold">{completedTasks}/{tasks.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;