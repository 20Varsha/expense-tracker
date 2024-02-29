const expense = require("../model/expense");

const get_by_name = async (data) => await expense.find(data);
const create = async (data) => await expense.create(data);
const remove = async (data) => await expense.deleteOne(data);
const update = async (id, data) => await expense.findByIdAndUpdate(id, data);

module.exports = {
    get_by_name,
    create,
    remove,
    update,
};
