const asyncHandler = require('express-async-handler')
const Program = require('../models/programModel');



const getAllPrograms = asyncHandler(async (req, res) => {

    const allPrograms = await Program.find({})
    res.status(200).json({
        success: true,
        data: allPrograms
    })
        .catch(error => {
            console.log(err);
            res.status(500).json({
                error: error
            })
        })


})


const deleteProgram = asyncHandler(async (req, res) => {
    console.log(req.params.Pid)
    const program = await Program.findByIdAndDelete(req.params.Eid);

    console.log(program)

    res.status(201).json({
        success: true,
        msg: 'Successfully Deleted',
        data: program
    })

    if (!program) {
        return res.status(401).json({
            success: false,
            msg: 'program not found.'
        })
    }

})


const createProgram = asyncHandler(async (req, res, next) => {

    const {
           Program_Id,
           ProgramCode, 
           Program_Name, 
           Days, 
           Timings, 
           Campus,
           Status, 
           genderIdentity, 
           AdmissionStatus,
           language,
           Shift 
         } = req.body
    console.log(req.body)


    const programid = await Program.findOne({Program_Id});
    console.log(programid)
    if(programid) {
        return res.status(400).json({
            success: false,
            msg: 'This programid _already exist.'
        })
    }

    const program = new Program({
           Program_Id, 
           ProgramCode,
           Program_Name, 
           Days, 
           Timings, 
           Campus,
           Status, 
           genderIdentity,
           AdmissionStatus, 
           language,
           Shift 
    });
    console.log(program)
    program.save(function (err, program) {
        if (err) return next(err)
        res.status(201).json({
            success: true,
            msg: 'program Created Sucessfully.',
            data:program,
        });
    })


})


const editProgram = asyncHandler(async (req, res) => {
    let program = await Program.findById(req.params.Pid);
    console.log(program);
    if (!program) {
        return res.status(401).json({
            success: false,
            msg: 'program not found.'
        })
    }
    program.Program_Id = req.body.Program_Id;
    program.Program_Name  = req.body.Program_Name;
    program.Days = req.body.Days;
    program.Timings = req.body.Timings;
    program.Campus = req.body.Campus;
    program.Status = req.body.Status;
    program.gender = req.body.gender;
    program.language = req.body.language;
 
    
    const updatedprogram = await program.save()
    console.log(updatedprogram)
    res.json({
        Program_Id: updatedprogram.Program_Id,
        Program_Name: updatedprogram.Program_Name,
        Days: updatedprogram.Days,
        Timings: updatedprogram.Timings,
        Campus: updatedprogram.Campus,
        Status: updatedprogram.Status,
        gender: updatedprogram.gender,
        language: updatedprogram.language,
      
    })


})




module.exports = {
    getAllPrograms,
    deleteProgram,
    createProgram,
    editProgram,

}
