import mongoose from "mongoose";

const UploadSchema = new mongoose.Schema({    
    photo: {
        type: String,
        required: [true, 'Please provide photo']
    },
    eventType: {
        type: String,
    }
},{
    timestamps:true
}
);

export default mongoose.model('Upload', UploadSchema)