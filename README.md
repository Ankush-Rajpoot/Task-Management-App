Task Management Application
A task management web application built with React (Frontend), Node.js (Backend), and MongoDB for storing tasks. This app allows users to create, update, delete, and track tasks with detailed information, including deadlines, priorities, and durations.

Features
Create, Read, Update, and Delete Tasks (CRUD Operations)
Task Categories: Organize tasks with custom categories (e.g., "To Do").
Task Priority: Set priority levels (e.g., "Low" and "High").
Task Duration: Track task durations in hours (converted to seconds).
Task Deadline: Set a deadline for each task.
Responsive UI: Clean and minimalistic design with a modal for adding tasks.
API Endpoints for Task Management: Interact with the backend API to manage tasks.
Technologies
Frontend: React, Axios, Framer Motion, React Icons, Tailwind CSS
Backend: Node.js, Express, MongoDB (with Mongoose), Body-Parser
Database: MongoDB
Deployment: Frontend on Netlify, Backend on Heroku or AWS
Getting Started
Prerequisites
Before starting, ensure you have the following installed:

Node.js
MongoDB
npm
Frontend Setup
Clone the repository:

git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
Install the dependencies:

cd frontend
npm install
Start the development server:

npm start
The frontend should now be available at http://localhost:3000.

Backend Setup
Navigate to the backend folder:

cd backend
Install the dependencies:

npm install
Create a .env file in the backend folder and add your MongoDB connection string:

MONGO_URI=your-mongo-db-uri
PORT=5000
Start the backend server:

npm start
The backend should now be available at http://localhost:5000.

API Endpoints
GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update an existing task.
DELETE /api/tasks/:id: Delete a task.
POST /api/tasks/:id/start: Start a task (optional, if you have a timer).
POST /api/tasks/:id/complete: Mark a task as complete.
Example Task Payload (POST)
When creating a new task, send a JSON body with the following format:

{
  "title": "Gym",
  "description": "Chest and Back workout",
  "priority": "low",
  "deadline": "2024-11-10",
  "duration": 3600, // in seconds (e.g., 1 hour)
  "category": "To Do"
}
Styling
The app uses Tailwind CSS for styling and includes:

A responsive modal to add tasks
Input fields with basic validation
A minimalist design with dark theme elements
Troubleshooting
If you encounter issues with the backend not connecting to MongoDB, double-check your MongoDB URI in the .env file.
Make sure both the backend and frontend servers are running on the correct ports (5000 for backend and 3000 for frontend).
Check the browser's developer tools Network tab for any issues with the API calls.
Deployment
You can deploy the frontend to platforms like Netlify and the backend to Heroku or AWS.

For deployment, follow the respective documentation:

Netlify Deployment
Heroku Deployment
AWS Deployment
Contributing
Feel free to submit pull requests, report issues, or open discussions. Contributions are welcome!
