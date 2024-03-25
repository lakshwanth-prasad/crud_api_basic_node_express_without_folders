const getStudents = "SELECT * FROM students";
const getStudentId = "SELECT * FROM students WHERE student_id = $1";
const checkLast_nameExists = "SELECT s FROM students s WHERE s.last_name = $1";
const addStudent = "INSERT into students (student_id, first_name, last_name, age, grade) values ($1,$2,$3,$4,$5)"
const deleteStudent = "DELETE from students WHERE student_id = $1"
const updateStudent = "UPDATE students SET first_name = $1 where student_id = $2"

module.exports = {
    getStudents,
    getStudentId,
    checkLast_nameExists,
    addStudent,
    deleteStudent,
    updateStudent
};