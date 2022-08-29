const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema(
    {
        rollNumber: {
            type: 'string',
            default: ''
        },
        firstName:{
            type: 'string',
            default: ''
        },
        lastName:{
            type: 'string',
            default: ''
        },
        name: {
            type: 'string',
            required: true
        },
        husband_fatherName: {
            type: 'string',
            default: ''
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        cnic_passport: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        phone: {
            type: 'string',
            default: ''
        },
        role: {
            type: 'string',
            default: ''
        },
        isStudent: {
            type: Boolean,
            default: false
        },
        isTeacher: {
            type: Boolean,
            default: false
        },
        isNazim: {
            type: Boolean,
            default: false
        },
        isAccountant: {
            type: Boolean,
            default: false
        },
        isSuperAdmin: {
            type: Boolean,
            default: false
        },
        shift: {
            type: 'string',
            default: ''
        },
        classs:{
            type: 'string',
            default: ''
        },
        perHourRate: {
            type: 'number',
            default: 0
        },
        avatar: {
            type: 'string',
            default: ''
        },
        favorites: [{
            news: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'News'
            }
        }],
        active: {
            type: Boolean,
            default: false
        },
        otp: {
            type: String
        },
        programId: {
            type: 'string',
            default: ''
        },
        activeToken: String,
        activeExpires: Date,
    }
)


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model('User', userSchema)
