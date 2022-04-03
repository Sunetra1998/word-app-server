import mongoose from "mongoose";

const wordSchema = mongoose.Schema({
    id: Number,
    word: String,
});

const word = mongoose.model('word', wordSchema);

export default word;