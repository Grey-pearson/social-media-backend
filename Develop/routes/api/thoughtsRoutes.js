// get, post, put, delete for users thougts

// get; specific thought by id or all

// post; create new thought and add to users data

// put; edit thought by id

// delete; delete thought from user


const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;