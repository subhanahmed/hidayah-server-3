const express = require('express');
const { 
    getProgramById

} = require('../controllers/studentController')
const protect = require('../middleware/authMiddleware');
const router = express.Router()

router.route('/program/:id').get(getProgramById)



module.exports = router