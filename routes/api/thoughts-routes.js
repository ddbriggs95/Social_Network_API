const router = require('express').Router();

const { addThought, getThoughts, getSingleThought, updateThought, deleteThought } = require('../../controllers/thoughtController');


//create mew thought 
router.route('/:userId').post(addThought);

//get all thoughts
router.route('/').get(getThoughts);

//get single thought by thought id and update a thought by thought id and delete thought by thought id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;