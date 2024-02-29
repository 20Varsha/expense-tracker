const category = require("../model/category");

const get_by_name = async (data) => await category.find(data);
const create = async (data) => await category.create(data);
const remove = async (data) => await category.deleteOne(data);
const update = async (id, data) => await category.findByIdAndUpdate(id, data);

module.exports = {
    get_by_name,
    create,
    remove,
    update,
};
