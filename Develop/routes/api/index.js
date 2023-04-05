const thoughtRoutes = require('./thoughtsRoutes')
const userRoutes = require('./usersRoutes')
const reactionsRoutes = require('./reactionsRoutes')
const friendsRoutes = reqiore('./friendsRoutes.js')

// router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
// router.use('/reactions', reactionsRoutes)
// router.use('/friends', friendsRoutes)

module.exports = router;

// commented out for testing