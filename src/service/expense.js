require("dotenv").config();
const expense_repository = require('../repository/expense')

const create = async (data,userId) => {
    const expense = await expense_repository.create({
        ...data,
        userId
    });
    return expense;
};

const get = async () => {
    const expense = expense_repository.get_by_name()
    return expense
}

const update = async (id, data) => {
    const existingNote = await expense_repository.get_by_name({ _id: { $ne: id }})
    
    if (existingNote && existingNote.length >= 1) {
        return { error_code: 1002 };
    } else {
        const filter = { _id: id };
        const updateData = { $set: { ...data } };

        await expense_repository.update(filter, updateData, { upsert: true });
        return updateData.$set;
    }
};

const remove = async (id) => {
    const delete_note = await expense_repository.remove({ _id: id })
    if (!delete_note) { return ({ error_code: 1001 }) }
    return delete_note
}

module.exports = {
    create,
    get,
    update,
    remove
}