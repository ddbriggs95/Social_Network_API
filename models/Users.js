const { Schema, model } = require('mongoose');


//Schema to create Users model
const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }

)


 // get total friends
 UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
 })

 //Create Users model
 const Users = model('Users', UsersSchema);

 module.exports = Users;