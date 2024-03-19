const constant = require("../constants/constants");
const user_auth_service = require("../service/auth_user");

const create = async (req, res) => {
    try {
        const result = await user_auth_service.create(req.body);
        if (result.error_code === 1001) {
            return res.status(409).send({ message: constant.USER_EXIST });
        } else if (result.error_code === 1002) {
            return res.status(409).send({ message: constant.PASSWORD_MISS_MATCH });
        }
        res.status(200).json({ status:"success",message: constant.USER_CREATED, result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// const login = async (req, res) => {
//     try {
//         const result = await user_auth_service.login(req.body);
//         if (result.error_code === 1003) {
//             return res.status(404).send({ message: constant.NOT_FOUND });
//         } else if (result.error_code === 1004) {
//             return res.status(401).send({ message: constant.PASSWORD_MISS_MATCH });
//         }

//         res.status(200).json({status:"success", message: constant.AUTHENTICATION_SUCCESSFUL, result });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

const login = async (req, res) => {
    try {
        const result = await user_auth_service.login(req.body);
        if (result.error_code === 1003) {
            return res.status(200).json({ status: "error", message: constant.NOT_FOUND });
        } else if (result.error_code === 1004) {
            return res.status(200).json({ status: "error", message: constant.PASSWORD_MISS_MATCH });
        }

        res.status(200).json({ status: "success", message: constant.AUTHENTICATION_SUCCESSFUL, result });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
};


module.exports = { create, login };
