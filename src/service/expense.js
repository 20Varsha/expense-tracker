require("dotenv").config();
const mongoose = require("mongoose");
const expense_repository = require('../repository/expense')

const create = async (data) => {
    const meeting_note = await expense_repository.create({
        _id: new mongoose.Types.ObjectId(),
        name:data.name,
        project_name: data.project_name,
        title: data.title,
        meeting_note: data.meeting_note
    });
    return meeting_note
}

const get = async () => {
    const meeting_note = expense_repository.get_by_name()
    return meeting_note
}

const update = async (note_id, data) => {
    const update_note = await expense_repository.get_by_name({ title: data.title, _id: { $ne: note_id } })
    if (update_note && update_note.length >= 1) { return ({ error_code: 1002 }) }
    else {
        const id = { _id: note_id }
        const note_details = { $set: { title: data.title, meeting_note: data.meeting_note, project_name: data.project_name,name:data.name } }
        await expense_repository.update(id, note_details, { upsert: true })
        return note_details;
    }
}

const remove = async (note_id) => {
    const delete_note = await expense_repository.remove({ _id: note_id })
    if (!delete_note) { return ({ error_code: 1001 }) }
    return delete_note
}

module.exports = {
    create,
    get,
    update,
    remove
}