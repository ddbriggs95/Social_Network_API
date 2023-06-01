const router = require('express').Router();

const { addThought, getThoughts, getSingleThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thoughtController');


//create mew thought 
router.route('/:userId').post(addThought);

//get all thoughts
router.route('/').get(getThoughts);

//get single thought by thought id and update a thought by thought id and delete thought by thought id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//add reaction to thoughts
router.route('/:thoughtId/reactions').post(addReaction);

//delete a reaction to a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;