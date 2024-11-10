import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';
import SearchBar from './components/SearchBar';
import AddTaskModal from './components/AddTaskModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setIsAddModalOpen(false);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar tasks={tasks} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
        
        <TaskBoard
          tasks={filteredTasks}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          loading={loading}
        />

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
        >
          <span className="text-xl">+</span>
          <span>Add Task</span>
        </button>

        {isAddModalOpen && (
          <AddTaskModal
            onClose={() => setIsAddModalOpen(false)}
            onSubmit={handleAddTask}
          />
        )}
        
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default App;