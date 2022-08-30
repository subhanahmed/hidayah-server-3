const express = require('express');
const router = express.Router()
const {
  students,
  faculties,
  studentsCount,
  facultiesCount,
  getStudentById,
  getStudentByIdForAttenPage
} = require('../controllers/superAdminController');
const protect = require('../middleware/authMiddleware.js')

router.route('/students').get(students)
router.route('/faculties').get(faculties)
router.route('/students/count').get(studentsCount)
router.route('/faculties/count').get(facultiesCount)
router.route('/student/:id').get(getStudentById)
router.route('/studentForAtten/:id').get(getStudentByIdForAttenPage)

module.exports = router
