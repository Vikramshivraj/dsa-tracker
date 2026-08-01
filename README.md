# 🚀 DSA Tracker - Coding Progress & Leaderboard Platform

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Authentication-JWT-orange?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-010101?style=for-the-badge&logo=socketdotio)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A full-stack **MERN** application that helps users track their Data Structures & Algorithms (DSA) progress, solve coding problems, monitor coding statistics, and compete on a real-time leaderboard.

The platform includes secure authentication, role-based admin access, problem management, progress tracking, and real-time updates powered by **Socket.io**.

---

# 🌟 Features

## 👨‍💻 User Features

- 🔐 Secure User Registration & Login
- 📊 Personalized Dashboard
- ✅ Solve DSA Problems
- 📈 Track Coding Progress
- 🔥 Daily Streak Counter
- 🏆 Real-Time Leaderboard
- 📚 LeetCode Problem Links
- 🎥 YouTube Solution Links
- 👥 Live Online User Count
- 📱 Fully Responsive Design

---

## 👨‍💼 Admin Features

- ➕ Add New Problems
- ❌ Delete Existing Problems
- 📝 Manage Problem Database

---

## ⚡ Real-Time Features

- Live Online Users
- Instant Leaderboard Updates
- Live User Activity Feed
- Socket.io Integration

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Socket.io Client

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- Socket.io

---

## Database

- MongoDB Atlas
- Mongoose

---

## Deployment

- Vercel
- Render
- MongoDB Atlas

---

# 🏗️ Project Architecture

```text
                     React Frontend
                           │
                     Axios API Calls
                           │
                  Express REST APIs
                           │
         ┌─────────────────┴─────────────────┐
         │                                   │
 Authentication                       Socket.io
         │                                   │
 Controllers                    Real-Time Events
         │
 Mongoose Models
         │
 MongoDB Atlas
```

---

# 📂 Folder Structure

```text
DSA-Tracker
│
├── client
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── context
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication Flow

```text
User Login
      │
      ▼
Email + Password
      │
      ▼
Backend Validation
      │
      ▼
Password Verification
      │
      ▼
JWT Token Generated
      │
      ▼
Protected API Requests
      │
      ▼
JWT Verification
```

---

# 🧠 Problem Solving Workflow

```text
User Solves Problem
        │
        ▼
Backend Validation
        │
        ▼
Find Problem
        │
        ▼
Find User
        │
        ▼
Already Solved?
        │
        ▼
No
        │
        ▼
Update

✔ Score
✔ Streak
✔ Difficulty Count
✔ Solved Problems

        │
        ▼
Save Database
        │
        ▼
Socket.io Event
        │
        ▼
Leaderboard Updated
```

---

# 📡 REST APIs

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Problems

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/problems` | Get All Problems |
| POST | `/api/problems` | Add Problem |
| PUT | `/api/problems/:id` | Solve Problem |
| DELETE | `/api/problems/:id` | Delete Problem |

---

## Leaderboard

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/leaderboard` | Get Leaderboard |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>

cd DSA-Tracker
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🌍 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

# 📸 Screenshots

> Add screenshots here after deployment.

### Login Page

<img width="1883" height="866" alt="image" src="https://github.com/user-attachments/assets/7a141afa-608c-431f-b198-fc2a31130ce0" />


### Dashboard


Screenshot Here
<img width="1886" height="833" alt="image" src="https://github.com/user-attachments/assets/b2ba54d8-b751-4f71-948a-633b25db343f" />



### Problems Page


Screenshot Here
<img width="1868" height="830" alt="image" src="https://github.com/user-attachments/assets/4b8213b7-8dd6-4985-84d0-f10c54a8473b" />



### Leaderboard


Screenshot Here
<img width="1886" height="862" alt="image" src="https://github.com/user-attachments/assets/dcdd9635-013e-48e1-ad97-3cd38913bf37" />


### Admin Panel


Screenshot Here
<img width="1105" height="848" alt="image" src="https://github.com/user-attachments/assets/df9bd044-5489-4fe1-a225-0170f55b1fa7" />



---

# 🚀 Future Improvements

- Refresh Token Authentication
- HTTP-only Cookies
- Problem Search & Filters
- Pagination
- User Profiles
- Submission History
- Docker Support
- Redis Caching
- Rate Limiting
- Unit Testing
- CI/CD Pipeline
- Dark Mode
- Email Verification
- Forgot Password
- Admin Analytics Dashboard

---

# 📚 Learning Outcomes

This project helped me gain hands-on experience with:

- MERN Stack Development
- REST API Design
- JWT Authentication & Authorization
- Password Hashing using bcrypt
- MongoDB Schema Design
- Socket.io Real-Time Communication
- React State Management
- API Integration
- Deployment using Vercel & Render
- Git & GitHub Workflow

---

# 🎯 Project Highlights

✅ Full MERN Stack Application

✅ JWT Authentication

✅ Role-Based Authorization

✅ Real-Time Leaderboard

✅ Socket.io Integration

✅ MongoDB Atlas

✅ REST APIs

✅ Responsive UI

✅ Admin Panel

---

# 👨‍💻 Author

## Vikram Singh

**B.E Electronics & Telecommunication**

**MERN Stack Developer | DSA Enthusiast**

---

## ⭐ If you found this project useful, consider giving it a Star!
