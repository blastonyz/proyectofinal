import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    user: {type: String, required: true},
    body: {type: String, required: true}},
    {timestamps: true});

export default mongoose.model('Message', messageSchema);