import mongoose from "mongoose";


//database of booking form
const BookingSchema = new mongoose.Schema({    

    title:{
        type: String
    },
    start:{
        type: Date
    },
    //first name can be equal to name of account
    fName: {
        type: String,
        required: [true, 'Please provide first name'],
      
    },


    lName: {
        type: String,
        required: [true, 'Please provide last name'],
        
    },

    MI: {
        type: String,

    },

    eventType: {
        type: String,
        default: 'bDayParty',
    },
    
    venue: {
        type: String,
        required: [true, 'Please provide venue for event']
    },

    date: {
        type: Date,
        required: [true, 'Please provide date of event'],
    },

    time:{
        type: String,
        required:[true, 'please provide time of event']
    },

    motif: {
        type: String,
        required:[true, 'please provide motif'],
        maxlength: 50
    },

    theme: {
        type: String,
        required:[true, 'please provide theme'],
    },

    contactNumber: {
        type: String,
        required: [true, 'Please provide contact number'],
        maxlength: 11,
    },

    status:{
        type: String,
        enum:['pending', 'accepted', 'cancelled'],
        default:'pending',
    },


    //optional setting data.
    gender:{
        type: String,
        default:"male"
    },

    celebName: {
        type: String,
        maxlength: 30
    },
    
    age:{
        type: String,
        maxlength:3
    },

    groomName:{
        type: String,
        maxlength: 50
    },

    brideName:{
        type: String,
        maxlength: 50
    },
    
    companyName: {
        type: String,
        maxlength: 100
    },
    email: {
        type: String,
        required: [true, "Please provide user"]
    },
    // createdBy: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    //     required: [true, "Please provide user"]
    // }
}
,{timestamps: true}  
)

export default mongoose.model('Booking', BookingSchema) 