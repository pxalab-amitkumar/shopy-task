const Survey = require('../models/surveyData');
module.exports = {
    fetchData: async (req, res, next) => {
        const surveys = await Survey.find({});
        res.status(200).json(surveys);

    },
    submitData: async (req, res, next) => {
        const newData = new Survey(req.body);
        const surveyData = await newData.save();
        res.status(201).json(surveyData);

    }
}