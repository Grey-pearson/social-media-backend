const router = require('express').Router();
const thoughtRoutes = require('./thoughtsRoutes')
const userRoutes = require('./usersRoutes')

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

// commented out for testing