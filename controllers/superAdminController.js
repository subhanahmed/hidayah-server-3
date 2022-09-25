const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
const Attendance = require('../models/attendanceModel')

// @desc    Get all Students
// @route   GET /api/superAdmin/students
// @access  Private/SuperAdmin
const students = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': true })
  res.json(users)
})

// @desc    Get all Faculties
// @route   GET /api/superAdmin/faculties
// @access  Private/SuperAdmin
const faculties = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': false })
  res.json(users)
})

// @desc    Get all StudentsCount
// @route   GET /api/superAdmin/students/count
// @access  Private/SuperAdmin
const studentsCount = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': true }).count()
  res.json(users)
})

// @desc    Get all FacultiesCount
// @route   GET /api/superAdmin/faculties/count
// @access  Private/SuperAdmin
const facultiesCount = asyncHandler(async (req, res) => {
  const users = await User.find({ 'isStudent': false }).count()
  res.json(users)
})

// @desc    Get student by ID
// @route   GET /api/superAdmin/student/:id
// @access  Private/SuperAdmin
const getStudentById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getStudentByIdForAttenPage = asyncHandler(async (req, res) => {
  //const arr1 = []
  //const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  //const date = new Date
  //const month = months[date.getMonth()]
  //const year = date.getFullYear()
  //console.log(month)
  //const user = await User.findById(req.params.id).select('firstName lastName role').populate({ path: 'programId', select: ["Program_Name"] })
  //arr1.push(user)
  const attendance = await Attendance.find({ 'User_id': req.params.id})
  //Array.prototype.push.apply(arr1, attendance);

  //console.log(arr1)
  if (attendance) {
    res.json(attendance)
  }
  else {
    res.status(404).json({
      success: false,
      msg: 'Student Not found'
    })
  }
})

module.exports = {
  students,
  faculties,
  studentsCount,
  facultiesCount,
  getStudentById,
  getStudentByIdForAttenPage
} 
