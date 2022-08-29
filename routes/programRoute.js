const express = require('express');
const { 
    getAllPrograms,
    deleteProgram,
    createProgram,
    editProgram,

} = require('../controllers/programController')
const protect = require('../middleware/authMiddleware');
const router = express.Router()

 router.route('/createprogram').post(createProgram);
 router.route('/deleteprogram/:Pid').delete(protect, deleteProgram);
router.route('/getallprograms').get(getAllPrograms);
router.route('/editprogram/:Pid').put(editProgram);
//router.route('/getfeebyid/:fid').get(getfeebyid);



module.exports = router