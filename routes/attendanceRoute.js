const express = require('express');
const { 
    getAllAttendance,
    deleteAttendance,
    setAttendance,
} = require('../controllers/attendanceController');
const protect = require('../middleware/authMiddleware');
const router = express.Router()

router.route('/setattendance').post(protect, setAttendance);
router.route('/deleteattendance/:Aid').delete(protect, deleteAttendance);
router.route('/getallattendace').get(getAllAttendance);




module.exports = router