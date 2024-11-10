import { FaSearch, FaFilter } from 'react-icons/fa';

function SearchBar({ value, onChange }) {
  return (
    <div className="bg-white p-4 border-b flex justify-between items-center">
      <div className="relative flex-1 max-w-2xl">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Project"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button className="ml-4 px-4 py-2 border rounded-lg flex items-center space-x-2 hover:bg-gray-50">
        <FaFilter className="text-gray-600" />
        <span className="text-gray-600">Filter</span>
      </button>
    </div>
  );
}

export default SearchBar;