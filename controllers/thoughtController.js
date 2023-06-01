const { Users, Thoughts } = require('../models');


module.exports = {
    //create new thought
        // add thought to user
        addThought({ params, body }, res) {
        //console.log(body);
        Thoughts.create(body)
            .then(({ _id }) => {
                return Users.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    //get all Thooughts
    async getThoughts(req,res) {
        try {
            const thought = await Thoughts.find();
            res.json(thought);

        } catch(err) {
            res.status(500).json(err);

        }
    },
    //get single thought by thought id
    async getSingleThought(req, res) {
        try {

            const thought = await Thoughts.findOne(req.params.id);
            res.json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //update thought by thought id
    async updateThought(req,res) {
        try {
          const thought = await Thoughts.findOneAndUpdate(req.params.id, req.body);
          res.json(thought);  


        } catch (err) {
            res.status(500).json(err);
        }
    },
    //delete thought by thought id
    async deleteThought(req,res) {
        try{
            const delThought = await Thoughts.findOneAndDelete(req.params.id);
            res.json(delThought);

        } catch(err) {
            res.status(500).json(err);
        }
    },
    //create reaction to thought
    

}
