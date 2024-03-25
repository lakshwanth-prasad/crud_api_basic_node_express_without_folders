const { Router } = require('express')
const controller = require ('./controller.js')
const router = new Router();

router.get("/",controller.getStudents);
router.get("/:student_id",controller.getStudentsId)
router.post("/",controller.addStudent)
router.put("/:student_id",controller.updateStudent)
router.delete("/:student_id",controller.deleteStudentsId)
module.exports = router;
