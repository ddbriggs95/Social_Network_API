const router = require('express').Router();

const { createUser, getAllUsers, getSingleUser, updateUser, addFriend } = require('../../controllers/userController');

//create new user
//get all users
router.route('/').post(createUser).get(getAllUsers);

//get single user by id
router.route('/:id').get(getSingleUser).put(updateUser);


//Add friend to user
router.route('/:id/friends/:friendId').post(addFriend);

module.exports = router;