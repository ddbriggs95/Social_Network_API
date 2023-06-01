const router = require('express').Router();

const { createThought, addThought } = require('../../controllers/thoughtController');


//create mew thought 
router.route('/:userId').post(addThought);

module.exports = router;