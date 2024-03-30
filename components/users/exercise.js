// An Api Route that will fetch exercise from database
// and return them as JSON
//
// Path: components/users/exercise.js
const express = require('express');

const router = express.Router();
const Exercise = require('../../model/data');

const getExercise = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.json({ message: error });
    }
}
const getExerciseById = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.json(exercise);
    } catch (error) {
        res.json({ message: error });
    }
}
const addExercise = async (req, res) => {
    try {
        if (!req.body || !req.body.username || !req.body.description || !req.body.duration || !req.body.date) {
            throw new Error('Missing required fields');
        }

        const exercise = new Exercise({
            username: req.body.username,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date,
        });

        const savedExercise = await exercise.save();
        res.json(savedExercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateExercise = async (req, res) => {
    try {
        const updatedExercise = await Exercise.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    username: req.body.username,
                    description: req.body.description,
                    duration: req.body.duration,
                    date: req.body.date,
                },
            }
        );
        res.json(updatedExercise);
    } catch (error) {
        res.json({ message: error });
    }
}
const deleteExercise = async (req, res) => {
    try {
        const removedExercise = await Exercise.remove({ _id: req.params.id });
        res.json(removedExercise);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getExercise,
    getExerciseById,
    addExercise,
    updateExercise,
    deleteExercise
};