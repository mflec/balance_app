const { User } = require("../db");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");


async function register(req, res) {
    try {
        const { name, password, email } = req.body
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 12);
            await User.create({
                id: uuidv4(),
                name,
                password: hashedPassword,
                email
            })
            return res.sendStatus(200);
        }
        return res.sendStatus(500)
    } catch (error) {
        console.log(error)
    }
}

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) throw new Error;
        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, "mysecretkey");
            return res.status(200).json({ token: token });
        }
        throw new Error;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    register,
    login,
}