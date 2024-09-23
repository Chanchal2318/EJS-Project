const Student = require('../models/Student');
async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentInsert');
    }catch(err){
        console.log(err);
    }
}
async function getStudents(req,res){
    try{
        let  children = await Student.find({});
        console.log(children, 'student')
        res.render('studentlist',{
            children : children
        });
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getStudents
}