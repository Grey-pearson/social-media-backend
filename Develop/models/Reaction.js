// (SCHEMA ONLY) no "const Course = model('course', courseSchema);"

// reactionId
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId

// reactionBody
// String
// Required
// 280 character maximum

// username
// String
// Required

// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query


const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 200,
            minlength: 1,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // formate date?? getter method? get: timeFormatter; function then formats it with json???
        },
    },
    {  // see if this is needed
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


module.exports = reactionSchema;
