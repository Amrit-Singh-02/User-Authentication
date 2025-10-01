# User Authentication System

A full-stack user authentication application built with React and Node.js, featuring JWT-based authentication, secure password hashing, and cookie management.

## 🚀 Features

- User Registration with secure password hashing
- User Login with JWT token authentication
- Protected routes and authentication middleware
- Cookie-based session management
- Password encryption using bcrypt
- CORS enabled for cross-origin requests
- Real-time toast notifications
- Responsive user interface

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Cookie** - Cookie management
- **React Toastify** - Toast notifications
- **React Testing Library** - Component testing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JSON Web Token (JWT)** - Secure token-based authentication
- **bcrypt** - Password hashing
- **cookie-parser** - Parse HTTP cookies
- **cors** - Enable CORS
- **dotenv** - Environment variable management

## 📁 Project Structure

```
User-Authentication/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # React components and logic
│   │   ├── components/    # Reusable components
│   │   └── ...
│   ├── package.json
│   └── .gitignore
├── server/                # Backend Node.js application
│   ├── Controllers/       # Route controllers
│   ├── Middlewares/       # Authentication & validation middleware
│   ├── Models/            # MongoDB schemas
│   ├── Routes/            # API routes
│   ├── util/              # Utility functions
│   ├── index.js           # Server entry point
│   ├── .env               # Environment variables
│   └── package.json
└── readme.md
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/Amrit-Singh-02/User-Authentication.git
cd User-Authentication
```

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```
The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```
The app will run on `http://localhost:3000`

## 🔐 Environment Variables

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-auth
JWT_SECRET=your_secret_key_here
NODE_ENV=development
COOKIE_EXPIRY=7d
```

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/verify` | Verify JWT token |

### Example Request Body

**Register:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Login:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

## 🧪 Testing

Run tests for the client:
```bash
cd client
npm test
```

## 🚀 Deployment

### Backend Deployment (Render/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the `server` directory
3. Ensure MongoDB connection is configured

### Frontend Deployment (Vercel/Netlify)
1. Build the React app:
```bash
cd client
npm run build
```
2. Deploy the `build` folder to your hosting platform

## 🔒 Security Features

- Passwords hashed using bcrypt with salt rounds
- JWT tokens for stateless authentication
- HTTP-only cookies to prevent XSS attacks
- CORS configuration for secure cross-origin requests
- Environment variables for sensitive data
- Input validation and sanitization

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Amrit Singh**
- GitHub: [@Amrit-Singh-02](https://github.com/Amrit-Singh-02)

## 📧 Contact

For any queries or suggestions, feel free to reach out!

---

⭐ If you found this project helpful, please give it a star!
