const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
// const users = require('./data'); whats this?
const { randomUser } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({})
  // await Thought.deleteMany({})
  // await Reaction.deleteMany({})

  randomUser()

  console.info('Seeding complete! 🌱');
  process.exit(0);
});

// refactor to be random