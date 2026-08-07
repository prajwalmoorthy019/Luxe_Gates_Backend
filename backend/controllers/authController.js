const {
    loginUser,
} = require("../services/authService");

const login = async (req, res) => {

    try {

        const response = await loginUser(req.body);

        return res.status(response.status).json(response);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

module.exports = {

    login,

};