const Students = require("../models/stdDB_model.js");

const getStudents = async () => {
  try {
    let studentss = await Students.find();
    return studentss;
  } catch (error) {
    console.log(error.message);
  }
};

const displayStudents = async (req, res) => {
  let students = await getStudents();

  let filterType = req.query.filter;
  if (filterType == "present") {
    students = students.filter((std) => std.isPresent == true);
  } else if (filterType == "absent") {
    students = students.filter((std) => std.isPresent == false);
  }
  res.render("home", { students: students });
};


const addStudentPage = (req, res) => {
  res.render("add");
};


const addStudent = async (req, res) => {
  req.body.isPresent = req.body.isPresent == "true"?
                       true : false;
  let newStudents = {
    name: req.body.name,
    age: Number(req.body.age),
    class: req.body.class,
    joiningDate: req.body.date,
    percentage: Number(req.body.percentage),
    grade: req.body.grade,
    isPresent: req.body.isPresent,
  }; 
  let students = await getStudents()
  await Students.db.collection('students').insertOne(newStudents)
  res.redirect("/");
};


const deleteStudent = async (req,res)=>{
  let id = req.params.id
  let students = await getStudents()
  let getStudent = students.find((std)=> id == std.id)
  await Students.findByIdAndDelete(getStudent)
  res.redirect("/")
  
}


const editStudentPage = async (req, res)=>{
  let id = req.params.id
  let students = await getStudents()
  let getStudent = students.find((std)=> id == std.id)
  // console.log(getStudent);
  res.render("edit",{student : getStudent} )
}


const editStudent = async(req, res)=>{
  req.body.isPresent = req.body.isPresent == "true"?
                       true : false;
  let newStudents = {
    name: req.body.name,
    age: Number(req.body.age),
    class: req.body.class,
    joiningDate: req.body.date,
    percentage: Number(req.body.percentage),
    grade: req.body.grade,
    isPresent: req.body.isPresent,
  }; 
  await Students.findByIdAndUpdate(req.params.id,newStudents)
  res.redirect("/");
}

const toggleAttendence = async (req, res) => {
  let id = req.params.id
  let students = await getStudents()
  let getStudent = students.find((std)=> id == std.id)
  await Students.findByIdAndUpdate(req.params.id, {
      isPresent: !getStudent.isPresent
  });
  res.redirect('/');
}

module.exports = { displayStudents, addStudentPage, 
  addStudent, deleteStudent, editStudentPage, editStudent, toggleAttendence };
