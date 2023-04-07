const router = require('express').Router();
// const thoughtRoutes = require('./thoughtsRoutes')
const userRoutes = require('./usersRoutes')
// const reactionsRoutes = require('./reactionsRoutes')
// const friendsRoutes = require('./friendsRoutes.js')

// router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
// router.use('/reactions', reactionsRoutes)
// router.use('/friends', friendsRoutes)
// router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

// commented out for testing