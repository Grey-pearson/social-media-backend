const { User, Friend, Thought, Reaction } = require('../models');

module.exports = {

    // get, post, put, delete for user profiles

    // get; all Reaction
    getAllReactions(req, res) {
        Reaction.find({})
            .populate({
                path: 'thought',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbReactionData => res.json(dbReactionData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // get; single Reaction
    getReactionById({ params }, res) {
        Reaction.findOne({ _id: params.reactionId })
            .populate({
                path: 'thought',
                select: '-__v'
            })
            .select('-__v')
            .then(dbReactionData => {
                if (!dbReactionData) {
                    res.status(404).json({ message: 'No reaction found with this id!' });
                    return;
                }
                res.json(dbReactionData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
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
    // put; edit specific Reaction info
    updateReaction({ params, body }, res) {
        Reaction.findOneAndUpdate({ _id: params.reactionId }, body, { new: true, runValidators: true })
            .then(dbReactionData => {
                if (!dbReactionData) {
                    res.status(404).json({ message: 'No reaction found with this id!' });
                    return;
                }
                res.json(dbReactionData);
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