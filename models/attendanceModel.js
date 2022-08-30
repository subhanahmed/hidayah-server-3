const mongoose = require('mongoose');

const attendanceSchema=mongoose.Schema({
   
    attendance_id: mongoose.Schema.Types.ObjectId,
    User_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hours: {
        type: 'number', 
    },
    is_present:{
        type: 'string'
    },
    is_absent: {
        type: 'string'
    },
    Date:{
        type: Date,
        default:''
    }
    
})

module.exports=mongoose.model('attendance',attendanceSchema);