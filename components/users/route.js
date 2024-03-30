const express = require('express');
const router = express.Router();
const { getExercise, getExerciseById, addExercise, updateExercise, deleteExercise } = require('./exercise');

router.route('/').get(getExercise);
router.route('/:id').get(getExerciseById);
router.route('/').post(addExercise);
router.route('/:id').put(updateExercise);
router.route('/:id').delete(deleteExercise);

module.exports = router;