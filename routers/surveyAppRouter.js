const express = require('express');
const router = require('express-promise-router')();
const SurveyDataController = require('../controllers/surveyDataController');
router.route('/router')
    .get(SurveyDataController.fetchData)
    .post(SurveyDataController.submitData);
module.exports = router;