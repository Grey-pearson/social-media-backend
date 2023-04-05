// thoughtText
// String
// Required
// Must be between 1 and 280 characters

// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

// username (The user that created this thought)
// String
// Required

// reactions (These are like replies)
// Array of nested documents created with the reactionSchema


const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // format date || refer to reaction.js
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ // nested arr of documents created with the reactions schema linked here somehow?
            {
                type: Schema.Types.ObjectId, // check if this is right
                ref: 'Reaction',
            },
        ],
    },
    {  // see if this is needed
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
