const pool = require('./db.js')
const queries = require('./queries.js')

const getStudents = (req,res)=>{
    pool.query(queries.getStudents,(error,results)=>{
        if(error) throw error
        res.status(200).json(results.rows);
    })
};

const getStudentsId = (req,res)=>{
    const student_id=parseInt(req.params.student_id)
    pool.query(queries.getStudentId,[student_id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req,res)=>{
    const{student_id, first_name, last_name, age, grade} = req.body;
    pool.query(queries.checkLast_nameExists,[last_name],(error, results)=>{
        if(results.rows.length){
            res.send("Lastname already exists");
        }
    pool.query(queries.addStudent,[student_id,first_name, last_name, age, grade],(error,results)=>{
        if (error) throw error;
        res.status(201).send("Created Successfully")
    })    
    });

}

const updateStudent = (req,res) =>{
    const student_id=parseInt(req.params.student_id);
    const {first_name} = req.body;
    pool.query(queries.getStudentId,[student_id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("No Student Found")
        }
        pool.query(queries.updateStudent,[first_name,student_id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Updated Successfully")
        })    
    })
}

const deleteStudentsId = (req,res)=>{
    const student_id=parseInt(req.params.student_id)
    pool.query(queries.getStudentId,[student_id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("No Student Found")
        }
        pool.query(queries.deleteStudent,[student_id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Deleted Successfully");
        });    
    });
}

module.exports ={
    getStudents,
    getStudentsId,
    addStudent,
    deleteStudentsId,
    updateStudent
};