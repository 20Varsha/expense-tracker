const income = require("../model/income");

const get_by_name = async (data) => await income.find(data);
const create = async (data) => await income.create(data);
const remove = async (data) => await income.deleteOne(data);
const update = async (id, data) => await income.findByIdAndUpdate(id, data);

module.exports = {
    get_by_name,
    create,
    remove,
    update,
};
