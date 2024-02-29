require("dotenv").config();
const mongoose = require("mongoose");
const income_repository = require('../repository/income')

const create = async (data,userId) => {
    const income = await income_repository.create({
        ...data,
        userId : userId
    });
    return income;
};

const get = async () => {
    const income = income_repository.get_by_name()
    return income
}

const update = async (id, data) => {
    const existingNote = await income_repository.get_by_name({ _id: { $ne: id }})
    
    if (existingNote && existingNote.length >= 1) {
        return { error_code: 1002 };
    } else {
        const filter = { _id: id };
        const updateData = { $set: { ...data } };

        await income_repository.update(filter, updateData, { upsert: true });
        return updateData.$set;
    }
};

const remove = async (id) => {
    const delete_note = await income_repository.remove({ _id: id })
    if (!delete_note) { return ({ error_code: 1001 }) }
    return delete_note
}

module.exports = {
    create,
    get,
    update,
    remove
}