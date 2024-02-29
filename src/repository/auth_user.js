const auth = require("../model/auth_user");

const get_user = async (data) => await auth.find(data) 
const create_user = async (data) => await auth.create(data);
const update_user = async (filter, update) => await auth.updateOne(filter, update);

module.exports = {
    get_user,
    create_user,
    update_user
};
