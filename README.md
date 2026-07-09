# 🎓 Student Management System

A full-stack **Student Management System** built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. The application allows users to manage student records efficiently with complete CRUD operations and attendance tracking.

---

# ✨ Features

- 📋 View all students
- ➕ Add new students
- ✏️ Edit student details
- ❌ Delete students
- ✅ Toggle attendance status
- 🔍 Filter students based on attendance
- 📅 Store joining date
- 📊 Store percentage and grade
- 💾 MongoDB database integration
- 🎨 Responsive Bootstrap UI

---

# 🛠 Tech Stack

### Frontend
- EJS
- HTML5
- CSS3
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

# 📂 Project Structure

```
Student-Management/
│
├── controllers/
│   └── studentController.js
│
├── db/
│   └── connectDB.js
│
├── models/
│   └── stdDB_model.js
│
├── views/
│   ├── home.ejs
│   ├── add.ejs
│   └── edit.ejs
│
├── public/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/Student-Management.git
```

Move into the project directory

```bash
cd Student-Management
```

Install dependencies

```bash
npm install
```

---

# ▶️ Run the Project

Development

```bash
npm start
```

or

```bash
nodemon app.js
```

The application will run at

```
http://localhost:8080
```

---

# 📦 Database Schema

### Student

```javascript
{
    name: String,
    age: Number,
    class: String,
    joiningDate: Date,
    percentage: Number,
    grade: String,
    isPresent: Boolean
}
```

---

# 📖 Application Workflow

```
Browser
    │
    ▼
Express Routes
    │
    ▼
Controllers
    │
    ▼
Mongoose Model
    │
    ▼
MongoDB
```

----

# 📚 What I Learned

- Express.js Routing
- MVC Architecture
- CRUD Operations
- MongoDB & Mongoose
- Async/Await
- Server-side Rendering with EJS
- Middleware
- Form Handling
- Database Integration

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```
git checkout -b feature-name
```

3. Commit your changes

```
git commit -m "Added new feature"
```

4. Push to GitHub

```
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Bhanu Prakash**

- GitHub: https://github.com/Bhanu9550

---

⭐ If you like this project, don't forget to star the repository!
