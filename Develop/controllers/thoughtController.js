const { User, Thought, Reaction } = require('../models');

module.exports = {
    // get, post, put, delete for users thougts

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // get specific thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // post; create new thought and add to users data
    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ userId }) => {
                return User.findOneAndUpdate(
                    { userId: params.userId },
                    { $push: { thoughts: userId } },
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
    // put; edit thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
    // delete; delete thought by id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: params.id } },
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

    // get, post, put, delete for reactions

    // post; create new unique Reaction
    createReaction({ params, body }, res) {
        Reaction.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(// make it does this for the thought too
                    { _id: params.userId },
                    { $push: { reactions: _id } },
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
    // delete; reaction from thought
    deleteReaction({ params }, res) {
        Reaction.findOneAndDelete({ _id: params.reactionId })
            .then(dbReactionData => {
                if (!dbReactionData) {
                    res.status(404).json({ message: 'No reaction found with this id!' });
                    return;
                }
                res.json(dbReactionData);
            })
            .catch(err => res.json(err));
    }
}