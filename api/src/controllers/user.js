const { User } = require("../db");
const bcrypt = require("bcrypt");

async function register(req, res) {
    try {
        const { name, password, email } = req.body
        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({
            name,
            password: hashedPassword,
            email
        })
        return res.sendStatus(200)
    } catch {
        console.log(error)
    }
}

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) return res.status(404);
        if (bcrypt.compareSync(password, user.password)) return res.status(200).json({user: user});
        return res.status(404);
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    register,
    login,
}