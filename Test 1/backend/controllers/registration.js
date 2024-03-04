// handle HTTP req for registration
const User = require('./models/User')
const registration = async(req, res) => {

    try {

        let {name, nationality, username, password } = req.body

        if (!name || !nationality || !username || !password ) {
            return res.status(400).send('Not all fields are entered!');

        }

        const checkExistingUser = await User.findOne({Username: username})
        if (checkExistingUser) {
            return res.status(400).send('User already exists!');

        }

        // User is a constructor fn now
        const newUser = new User({

            Name: name,
            Nationality: nationality,
            Username:  username,
            Password: password

        })

        if (newUser) {
            return res.status(200).send('Registration successful!')
        }

    }

    catch(error) {

        console.log(error)

    }
    
}

module.exports = registration
