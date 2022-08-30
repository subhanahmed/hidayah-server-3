const asyncHandler = require('express-async-handler')
const Attendance = require('../models/attendanceModel')



//const mongoose = require('mongoose');

// @desc    Add Book
// @route   POST /api/news/addNews
// @access  Private

//end Point: http://localhost:3000/api/Books/getAllBook
const getAllAttendance = asyncHandler(async (req, res) => {

    const allattendance = await Attendance.find({})
    res.status(200).json({
        success: true,
        data: allattendance
    })
    .catch(error=>{
        console.log(err);
        res.status(500).json({
            error:error
        })
    })


})

const deleteAttendance = asyncHandler(async (req, res) => {
    console.log(req.params.Aid)
    const attendance = await Attendance.findByIdAndDelete(req.params.Aid);

    console.log(attendance)

    res.status(201).json({
        success: true,
        msg: 'Successfully Deleted',
        data: attendance
    })

    if (!attendance) {
        return res.status(401).json({
            success: false,
            msg: 'attendance Id not found.'
        })
    }

})

// End Point: http://localhost:3000/api/Books/addBook
//Payload: "ReleaseDate": "1999-12-01T08:00:00.000Z",
        // "_id": "6301d7c49ec6bd1850931063",
        // "Book_Title": "Book3",
        // "Class": 1,
        // "Publisher": "hidayah",
        // "Desc": "hello"

const setAttendance = asyncHandler(async (req, res,next) => {
    console.log(req.file)

    const { 
        User_id,
        hours,
        is_present,
        is_absent,
        Date,
     } = req.body

   // const attendanceid = await Attendance.findOne( _id );

    // if (attendanceid) {
    //     return res.status(401).json({
    //         success: false,
    //         msg: 'This attendanceid already exisit.'
    //     })
    // }

    const attendance = new Attendance({ 

        User_id,
        hours,
        is_present,
        is_absent,
        Date,

     });

     attendance.save().then(result=>{
        console.log(result);
    }).catch(err=>console.log(err));

    res.status(201).json({
        success: true,
        msg: 'Attendance created',
        data: attendance
    })


})


module.exports = {
    getAllAttendance,
    deleteAttendance,
    setAttendance,
}