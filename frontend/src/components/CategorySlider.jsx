import { motion } from 'framer-motion';

function CategorySlider({ categories, currentCategory, onCategoryChange }) {
  return (
    <div className="mb-8">
      <div className="flex space-x-4 p-2 bg-surface rounded-lg">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              currentCategory === category
                ? 'bg-primary text-white'
                : 'text-text hover:bg-primary/10'
            }`}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default CategorySlider;