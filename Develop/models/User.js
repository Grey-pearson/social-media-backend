// username
// String
// Unique
// Required
// Trimmed

// email
// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)

// thoughts
// Array of _id values referencing the Thought model

// friends
// Array of _id values referencing the User model (self-reference)


const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // matching validation
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [ // an array refrencing id values from the thought model
            {
                type: Schema.Types.ObjectId, // check if this is right
                ref: 'Thought',
            },
        ],
        friends: [ // array used the same as thoughts but is self refrencing?
            {
                type: Schema.Types._id, // check if this is right
                ref: 'User',
            },
        ],
    },
    // { // see if this is needed
    //     toJSON: {
    //         virtuals: true,
    //     },
    //     id: false,
    // }
);

const User = model('user', userSchema);

module.exports = User;
