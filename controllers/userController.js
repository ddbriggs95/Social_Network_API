const { Users, Thoughts } = require('../models');


module.exports = {
    //create a User
    async createUser(req,res) {
        try {
            const user = await Users.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    //get all users
    async getAllUsers(req, res) {
        try {
            const users = await Users.find();
            res.json(users)
            } catch (err) {
                res.status(500).json(err);
            }
    },
    //get single user by their id
    async getSingleUser(req,res) {
        try {
            const user = await Users.findById(req.params.id)
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //update single user by id
    async updateUser(req,res) {
        try {
            const user = await Users.findByIdAndUpdate(req.params.id, req.body);
            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    //delete user
    async deleteUser(req,res) {
        try {
            const deleteUser = await Users.findByIdAndDelete(req.params.id);
            res.json(deleteUser);

        } catch (err) {
            res.status(500).json(err);
        }
    },


    //add friend
    async addFriend(req,res) {
        try {
            const newFriend = await Users.findByIdAndUpdate(req.params.id, { $set: {friends: req.params.friendId}} )
            res.json(newFriend);
             
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //remove friend
    async removeFriend(req, res) {
        try {
            const removeFriend = await Users.findByIdAndRemove(req.params.id, { $pullAll: {friends: req.params.friendId}});
            res.json(removeFriend);

        } catch (err) {
            res.status(500).json(err);
        }
    }

   
}