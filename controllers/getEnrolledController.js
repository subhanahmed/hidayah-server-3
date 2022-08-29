const { json } = require('express');
const asyncHandler = require('express-async-handler')
var HttpError = require('http-errors')
const Enquries = require('../models/getEnrolledModel');


// @desc    Get Enquries
// @route   POST /api/enrollment/getAllEnquries
// @access  Private


//http://localhost:3000/api/enrollment/deleteEnquires/6304c23ea0c1050cf0c816ae
const getAllEnquries = asyncHandler(async (req, res) => {

    const allEnquries = await Enquries.find({})
    res.status(200).json({
        success: true,
        data: allEnquries
    })
        .catch(error => {
            console.log(err);
            res.status(500).json({
                error: error
            })
        })


})

//End Point: (DELETE)http://localhost:3000/api/enrollment/deleteEnquires/Eid

const deleteEnquires = asyncHandler(async (req, res) => {
    console.log(req.params.Eid)
    const enquire = await Enquries.findByIdAndDelete(req.params.Eid);

    console.log(enquire)

    res.status(201).json({
        success: true,
        msg: 'Successfully Deleted',
        data: enquire
    })

    if (!enquire) {
        return res.status(401).json({
            success: false,
            msg: 'enquire not found.'
        })
    }

})

// End Point: (POST)http://localhost:3000/api/enrollment/getEnrolled
//Payload: 
// username:"string", 
// Reference:"string", 
// Place_of_Birth:"string", 
// Marital_Status:"string", 
// cnic:"string",
// Expertise:"string", 
// Date_of_Birth:"string", 
// Mobile_Number:"string", 
// Whatsapp_Number:"string", 
// Nationality:"string", 
// Address:"string", 
// Gender:"string", 
// Qualification:"string", 
// Apply_for_shift:"string", 
// Email:"string","unique", 
// Role:"string",

const getEnrolledStudent = asyncHandler(async (req, res, next) => {

    const {
        firstName, 
        lastName, 
        husband_fatherName, 
        dateOfBirth, 
        cnic_passport, 
        maritalStatus, 
        gender, 
        phone, 
        whatsapp, 
        email, 
        nationality, 
        address, 
        qualification, 
        occupation, 
        placeOfBirth, 
        reference,
        previousIslamicEducation,
        howDidYouHearAboutThisAcademy,
        role,
        programId,
        submissionDate
         } = req.body
    //console.log(req.body)

    const enquireid = await Enquries.findOne({email});
    //console.log(enquireid)
    if(enquireid) {
        return res.status(400).json({
            success: false,
            msg: 'Registration already exist with your email Id.'
        })
    }

    const enquire = new Enquries({
        firstName, 
        lastName, 
        husband_fatherName, 
        dateOfBirth, 
        cnic_passport, 
        maritalStatus, 
        gender, 
        phone, 
        whatsapp, 
        email, 
        nationality, 
        address, 
        qualification, 
        occupation, 
        placeOfBirth, 
        reference,
        previousIslamicEducation,
        howDidYouHearAboutThisAcademy,
        role,
        programId,
        submissionDate
    });
    //console.log(enquire)
    enquire.save(function (err, enquire) {
        if (err) return next(err)
        res.status(201).json({
            success: true,
            msg: 'Form Submitted Sucessfully.',
            data:enquire,
        });
    })


})

// End Point: (PUT)http://localhost:3000/api/enrollment/Eid
//Payload: 
// username:"string", 
// Reference:"string", 
// Place_of_Birth:"string", 
// Marital_Status:"string", 
// cnic:"string",
// Expertise:"string", 
// Date_of_Birth:"string", 
// Mobile_Number:"string", 
// Whatsapp_Number:"string", 
// Nationality:"string", 
// Address:"string", 
// Gender:"string", 
// Qualification:"string", 
// Apply_for_shift:"string", 
// Email:"string","unique", 
// Role:"string",

const editEnquire = asyncHandler(async (req, res) => {
    let enquire = await Enquries.findById(req.params.Eid);
    console.log(enquire);
    if (!enquire) {
        return res.status(401).json({
            success: false,
            msg: 'enquire not found.'
        })
    }
    enquire.username = req.body.username;
    enquire.Reference = req.body.Reference;
    enquire.Place_of_Birth = req.body.Place_of_Birth;
    enquire.Marital_Status = req.body.Marital_Status;
    enquire.cnic = req.body.cnic;
    enquire.Expertise = req.body.Expertise;
    enquire.Date_of_Birth = req.body.Date_of_Birth;
    enquire.Mobile_Number = req.body.Mobile_Number;
    enquire.Whatsapp_Number = req.body.Whatsapp_Number;
    enquire.Nationality = req.body.Nationality;
    enquire.Address = req.body.Address;
    enquire.Gender = req.body.Gender;
    enquire.Qualification = req.body.Qualification;
    enquire.Apply_for_shift = req.body.Apply_for_shift;
    enquire.Email = req.body.Email;
    enquire.Role = req.body.Role;

    const updatedenquire = await enquire.save()
    console.log(updatedenquire)
    res.json({
        username: updatedenquire.username,
        Reference: updatedenquire.Reference,
        Place_of_Birth: updatedenquire.Place_of_Birth,
        Marital_Status: updatedenquire.Marital_Status,
        cnic: updatedenquire.cnic,
        Expertise: updatedenquire.Expertise,
        Date_of_Birth: updatedenquire.Date_of_Birth,
        Mobile_Number: updatedenquire.Mobile_Number,
        Whatsapp_Number: updatedenquire.Whatsapp_Number,
        Nationality: updatedenquire.Nationality,
        Address: updatedenquire.Address,
        Gender: updatedenquire.Gender,
        Qualification: updatedenquire.Qualification,
        Apply_for_shift: updatedenquire.Apply_for_shift,
        Email: updatedenquire.Email,
        Role: updatedenquire.Role,

    })


})




module.exports = {
    getAllEnquries,
    deleteEnquires,
    getEnrolledStudent,
    editEnquire,

}
