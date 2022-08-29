const express = require('express');
const { 
    getAllEnquries,
    deleteEnquires,
    getEnrolledStudent,
    editEnquire,
} = require('../controllers/getEnrolledController')
const protect = require('../middleware/authMiddleware');
const router = express.Router()

router.route('/student').post(getEnrolledStudent);
router.route('/deleteEnquires/:Eid').delete(deleteEnquires);
router.route('/getAllEnquries').get(getAllEnquries);
router.route('/editEnquire/:Eid').put(editEnquire);




module.exports = router