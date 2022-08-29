const mongoose = require('mongoose');

const programSchema=mongoose.Schema({
   Program_Id:{
        type: 'string',
        unique: true
    },
    ProgramCode:{
        type: 'string',
        default: ''
    },
    Program_Name: {
        type: 'string', 
        default:''
    },
    Days:{
        type: 'string',
        default:''
    },
    Timings: {
        type: 'string',
        default:''
    },
    Campus:{
        type: 'string',
        default:''
    },
    Status:{
        type: 'string',
        default:''
    },
    genderIdentity:{
        type: 'string',
        default:''
    },
    language:{
        type:'string',
        default:''
    },
    AdmissionStatus: {
        type: 'string',
        default: ''
    },
    Shift: {
        type: 'string',
        default: ''
    }
    
})

module.exports=mongoose.model('Program',programSchema);