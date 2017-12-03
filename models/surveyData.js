const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const surveyDataSchema = new Schema({
    name: {
        type: String
    },
    dob: {
        type: Date,
        default: Date.now
    },
    food: {
        type: Number,
        default: 3
    },
    ambiance: {
        type: Number,
        default: 3
    },
    service: {
        type: Number,
        default: 3
    },
    pricing: {
        type: Number,
        default: 3
    },
    message: {
        type: String,
        default: 'NO FeedBack '
    }
});
const Survey = mongoose.model('survey', surveyDataSchema);
module.exports = Survey;