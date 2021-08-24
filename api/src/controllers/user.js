const { User } = require("../db");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');


async function register(req, res) {
    try {
        const { name, password, email } = req.body
        //const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({
            id: uuidv4(),
            name,
            password,
            email
        })
        return res.sendStatus(200)
    } catch(error) {
        console.log(error)
    }
}

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) return res.status(404);
        if (password== user.password) return res.status(200).json({user: user.dataValues.id});
        return res.status(404);
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    register,
    login,
}