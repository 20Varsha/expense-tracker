const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const user_repository = require("../repository/auth_user");
require("dotenv").config();

const create = async (data) => {
    const { email, password, confirm_password, name } = data;

    const user = await user_repository.get_user({ email });

    if (user && user.length >= 1) {
        return { error_code: 1001 };
    } else if (password !== confirm_password) {
        return { error_code: 1002 };
    } else {
        const salt_rounds = 10;
        const hashed_password = await bcrypt.hash(password, salt_rounds);
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        const signup = await user_repository.create_user({
            _id: new mongoose.Types.ObjectId(),
            name,
            email,
            password: hashed_password,
            signup_token: token,
        });
        return signup;
    }
};

const login = async (data) => {
    const { email, password } = data;
    const user = await user_repository.get_user({ email });

    if (!user || user.length < 1) {
        return { error_code: 1003 };
    }

    const match = await bcrypt.compare(password, user[0].password);
    if (!match) {
        return { error_code: 1004 };
    }

    const token = jwt.sign({ email: user[0].email }, process.env.JWT_SECRET);
    return { token };
};

module.exports = { create, login };
