// const User = require('../models/User')
// const {StatusCodes} = require('http-status-codes')
// const register = async (req, res) => {
//     console.log(req.body)
//     const user = await User.create({...req.body})
//     res.status(StatusCodes.CREATED).json(req.body)
// }

// const login = async (req, res) => {
//     res.send('login User')
// }


// module.exports = {
//     register,
//     login
// }


const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

const register = async (req, res) => {
    try {
        const user = await User.create({...req.body});
        res.status(StatusCodes.CREATED).json(user); // Send back the created user object
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}

const login = async (req, res) => {
    res.send('Login User');
}

module.exports = {
    register,
    login
}








