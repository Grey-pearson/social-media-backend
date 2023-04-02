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

const courseSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        email: {
            type: Date,
            default: Date.now,
            // formate date??
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, // check if this is right
                ref: 'Reaction',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, // check if this is right
                ref: 'Reaction',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Course = model('course', courseSchema);

module.exports = Course;
