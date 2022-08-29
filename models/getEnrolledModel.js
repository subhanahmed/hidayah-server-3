const mongoose = require('mongoose');
const enquriesSchema = mongoose.Schema(
    {
        firstName:{
            type:'string',
            default:''
        },
        lastName: {
            type: 'string',
            default:''
        },
        husband_fatherName:{
            type:'string',
            default:''
        },
        dateOfBirth:{
            type:'string',
            default:''
        },
        cnic_passport: {
            type: 'string',
            default: ''
        },
        maritalStatus:{
            type:'string',
            default:''
        },
        gender:{
            type:'string',
            default:''
        },
        phone:{
            type:'string',
            default:''
        },
        whatsapp:{
            type:'string',
            default:''
        },
        email:{
            type:'string',
            required: true,
            unique: true
        },
        nationality:{
            type:'string',
            default:''
        },
        address:{
            type:'string',
            default:''
        },
        qualification:{
            type:'string',
            default:''
        },
        occupation:{
            type:'string',
            default:''
        },
        placeOfBirth:{
            type:'string',
            default:''
        },
        reference:{
            type:'string',
            default:''
        },
        expertise:{
            type:'string',
            default:''
        }, 
        previousIslamicEducation:{
            type:'string',
            default:''
        },
        howDidYouHearAboutThisAcademy:{
            type:'string',
            default:''
        },
        role:{
            type:'string',
            default:''
        },
        programId: {
            type: 'string',
            default: ''
        },
        submissionDate: {
            type: 'string',
            default: ''
        }
    }
)

module.exports = mongoose.model('Enquries', enquriesSchema)
