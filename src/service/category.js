require("dotenv").config();
const mongoose = require("mongoose");
const category_repository = require('../repository/category')

const create = async (data) => {
    const category = await category_repository.create({
        ...data,
    });
    return category;
};

const get = async () => {
    const category = category_repository.get_by_name()
    return category
}

const update = async (id, data) => {
    const existingNote = await category_repository.get_by_name({ _id: { $ne: id }})
    
    if (existingNote && existingNote.length >= 1) {
        return { error_code: 1002 };
    } else {
        const filter = { _id: id };
        const updateData = { $set: { ...data } };

        await category_repository.update(filter, updateData, { upsert: true });
        return updateData.$set;
    }
};

const remove = async (id) => {
    const delete_note = await category_repository.remove({ _id: id })
    if (!delete_note) { return ({ error_code: 1001 }) }
    return delete_note
}

module.exports = {
    create,
    get,
    update,
    remove
}