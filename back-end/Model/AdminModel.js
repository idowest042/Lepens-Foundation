import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Subject: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true,
    }

})
const admin = mongoose.models.admin || mongoose.model("admin", adminSchema);
export default admin;