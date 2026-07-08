const express =  require('express')
const app = express()
const PORT = 8080
const connectDB = require('./db/connectDB.js')
const {displayStudents, addStudentPage, addStudent, 
    deleteStudent, editStudentPage, editStudent, toggleAttendence} = require('./controllers/studentController.js')

connectDB()

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")

app.get("/", displayStudents)

app.get("/add", addStudentPage);

app.post("/add", addStudent)

app.get("/delete/:id",deleteStudent)

app.get("/edit/:id", editStudentPage)

app.post("/edit/:id", editStudent)

app.get("/toggle/:id", toggleAttendence)

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}..`);
})