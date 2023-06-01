const router = require('express').Router();

const { createUser, getAllUsers, getSingleUser, updateUser, addFriend, removeFriend, deleteUser } = require('../../controllers/userController');

//create new user or get all users
router.route('/').post(createUser).get(getAllUsers);

//get single user by id and update or delete
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);


//Add friend to user
router.route('/:id/friends/:friendId').post(addFriend);

//remove friend from user
router.route('/:id/friends/:friendId').delete(removeFriend);

module.exports = router;