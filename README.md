# Project Title

A brief description of your project.

## Features

- Responsive design using Tailwind CSS
- Authentication using Clerk
- Full-stack application with MongoDB, Express, React, and Node.js (MERN stack)
- RESTful API for backend operations
- User-friendly frontend

## Technologies Used

- **Tailwind CSS** - A utility-first CSS framework for building custom designs.
- **MongoDB** - NoSQL database for storing data.
- **Clerk** - For managing user authentication and sessions.
- **Express** - Backend framework for handling HTTP requests.
- **React** - Frontend library for building user interfaces.
- **Node.js** - JavaScript runtime for building the backend server.

## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Aruneshwaran19/Music-Player.git
cd Music-Player
```
### 2. Install dependencies
For backend (Node.js + Express) & For frontend (React):
```bash
npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend
npm start --prefix backend
```

### Setup .env file in _backend_ folder

```bash
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...


CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

### Setup .env file in _frontend_ folder

```bash
VITE_CLERK_PUBLISHABLE_KEY=...
```
## Folder Structure
```bash
Music-Player/
│
├── backend/                               # Backend server (Express/Node)
│   ├── src/                               # Source code for backend
│   │   ├── controller/                    # Controllers for handling requests
│   │   ├── models/                        # Mongoose models
│   │   ├── routes/                        # Express routes
│   │   └── index.js                       # Main entry point for the backend server
│   ├── .env.sample                        # Sample environment variables file
│   ├── .gitignore                         # Git ignore file for backend
│   └── package.json                       # Backend dependencies and scripts
│
├── frontend/                              # Frontend React app
│   ├── public/                            # Public assets (e.g., images, icons)
│   └── src/                               # Source code for frontend
│       ├── components/                    # Reusable components (e.g., Navbar, SongCard)
│       ├── pages/                         # React pages (e.g., Home, Playlist)
│       ├── App.js                         # Main React app component
│       └── index.js                       # Entry point for React app
│       └── tailwind.config.js             # Tailwind CSS configuration
│       └── package.json                   # Frontend dependencies and scripts
│
├── .gitignore                             # Global Git ignore file
├── README.md                              # Project documentation
└── package.json                           # Project-level dependencies and scripts (includes both frontend and backend)

```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




