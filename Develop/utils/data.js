const { User, Thought, Reaction } = require('../models');

// data for username, email, sencentes for thoughts and reactions

// only example text
const username = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
]

const email = [
    'ntegrity@verizon.net',
    'hahsler@live.com',
    'josem@hotmail.com',
    'mrsam@verizon.net',
    'dprice@hotmail.com',
    'philb@aol.com',
    'irving@aol.com',
    'saridder@outlook.com',
    'jbearp@yahoo.com',
    'fwitness@icloud.com',
    'richard@yahoo.com',
    'rcwil@verizon.net',
]

// only example text
const sentences = [
    'Can we go to the park.',
    'Where is the orange cat? Said the big black dog.',
    'We can make the bird fly away if we jump on something.',
    'We can go down to the store with the dog. It is not too far away.',
    'My big yellow cat ate the little black bird.',
    'I like to read my book at school.',
    'We are going to swim at the park.'
]

const randomItems = (Array) => arr[Math.floor(Math.random() * arr.length)]

// create only required model for each,


// create req user, for each user, create random thought, with random reaction, then add random friend to user

const randomUser = () => {

    const userData = []
    const thoughtData = []
    for (let i = 0; i < 10; i++) {
        userData.push([{
            username: username[Math.floor(Math.random() * username.length)],
            email: email[Math.floor(Math.random() * email.length)],
            thoughts: [],
            friends: [],
        }])
    }

    userData.forEach(user => {

        console.log(user)
    })
}

module.exports = { randomUser }