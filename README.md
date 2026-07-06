# 🚀 Task Manager - MERN Stack

A modern and responsive **Task Management Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This application helps users organize and manage their daily tasks with authentication, search, filters, sorting, task priorities, and due dates.

Backend : https://task-manager-application-6o4x.onrender.com

Frontend : https://task-manager-application-plum-ten.vercel.app/

### Login Page

### Register Page

### Dashboard

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Logout
* Persistent Login using Local Storage

---

## ✅ Task Management

* Create Task
* View All Tasks
* Edit Task
* Delete Task
* Task Status (Pending / Completed)
* Due Date Support
* Task Priority (Low / Medium / High)

---

## 🔎 Search & Filter

* Search Tasks by Title
* Filter by Status
* Filter by Priority
* Sort by:

  * Newest
  * Oldest
  * Priority
  * Due Date

---

## 📊 Dashboard

* Total Tasks
* Pending Tasks
* Completed Tasks
* High Priority Tasks

---

## 🎨 User Interface

* Responsive Design
* Modern Dashboard
* Gradient UI
* Interactive Cards
* Toast Notifications
* Beautiful Navbar
* Search Bar
* Filter & Sort Controls

---

# 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Toastify
* React Icons

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

---

# 📂 Project Structure

```
TaskManager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager.git
```

```bash
cd task-manager
```

---

## 2. Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start backend

```bash
npm run dev
```

---

## 3. Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start frontend

```bash
npm run dev
```

---

# 🌐 Environment Variables

Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🚀 API Endpoints

## Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

---

## Tasks

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/tasks`     | Get All Tasks |
| POST   | `/api/tasks`     | Create Task   |
| PUT    | `/api/tasks/:id` | Update Task   |
| DELETE | `/api/tasks/:id` | Delete Task   |

---

# 📦 Dependencies

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* React Toastify
* React Icons

### Backend

* Express
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors
* nodemon

---

# 🚀 Deployment

### Frontend

Deploy using **Vercel**

### Backend

Deploy using **Render**

### Database

MongoDB Atlas

---

# 🔮 Future Improvements

* Dark Mode
* Task Categories
* Calendar View
* Drag & Drop Tasks
* Email Reminders
* File Attachments
* Charts & Analytics
* User Profile
* Team Collaboration
* Real-time Updates
* Export Tasks to PDF/CSV
* PWA Support

---

# 👨‍💻 Author

**Ankit Umath**

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

---

## 📄 License

This project is licensed under the **MIT License**.
