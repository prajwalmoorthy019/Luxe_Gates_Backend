const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (data) => {

    const { email, password } = data;

    // Validate Input
    if (!email || !password) {

        return {

            success: false,

            status: 400,

            message: "Email and Password are required."

        };

    }

    // Find User
    const [users] = await db.execute(

        "SELECT * FROM users WHERE email = ?",

        [email]

    );

    if (users.length === 0) {

        return {

            success: false,

            status: 401,

            message: "Invalid Email or Password."

        };

    }

    const user = users[0];

    // Check Status
    if (user.status !== "ACTIVE") {

        return {

            success: false,

            status: 403,

            message: "User is inactive."

        };

    }

    // Compare Password
    const passwordMatched = await bcrypt.compare(

        password,

        user.password

    );

    if (!passwordMatched) {

        return {

            success: false,

            status: 401,

            message: "Invalid Email or Password."

        };

    }

const token = jwt.sign(
    {
        id: user.id,
        email: user.email,
        role: user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "8h",
    }
);

return {

    success: true,

    status: 200,

    message: "Login Successful.",

    token,

    user: {

        id: user.id,

        full_name: user.full_name,

        email: user.email,

        role: user.role

    }

};

};

module.exports = {

    loginUser,

};