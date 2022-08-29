const asyncHandler = require('express-async-handler')
const Program = require('../models/programModel');


// @desc    Get programCode by student's programID
// @route   GET /api/student/program/:id
// @access  Private/Student
const getProgramById = asyncHandler(async (req, res) => {
    const  Program_Id  = req.params.id
    console.log(req.params.id)
    const programCode = await Program.findOne({Program_Id}).select('ProgramCode -_id')
  console.log(programCode)
    if (programCode) {
      res.json(programCode)
    } else {
        res.status(404).json({
          success: false,
          msg: 'program Not found'
        })
      }
  })

  module.exports = {
    getProgramById
}
