const notes = require("../model/expense");

const get_by_name = async (data) => await notes.find(data);
const create = async (data) => await notes.create(data);
const remove = async (data) => await notes.deleteOne(data);
const update = async (id, data) => await notes.findByIdAndUpdate(id, data);

module.exports = {
    get_by_name,
    create,
    remove,
    update,
};
