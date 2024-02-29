const constant = require("../constants/constants");
const expense_service = require("../service/expense")

const create = async (req, res) => {
    try {
        let userId=req.user.userId
        const result = await expense_service.create(req.body,userId)
        if (result) { res.status(200).json({ message: constant.EXPENSE_CREATED, result: result }) }
        else { res.status(500).json({ message: err.message }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const get = async (req, res) => {
    try {
        const result = await expense_service.get();
        if (result) { res.status(200).json({ message: constant.FETCH_EXPENSE, count: result.length, data: result, error_code: 0 }) }
        else { res.status(500).json({ message: constant.ERROR, }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const remove = async (req, res) => {
    try {
        const result = await expense_service.remove(req.params.id);
        if (result.error_code == 1001) return res.status(404).json({ message: constant.DATA_MISSING })
        res.status(200).json({ message: constant.EXPENSE_DELETE, result: result });
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const update = async (req, res) => {
    try {
        const result = await expense_service.update(req.params.id, req.body);
        if (result) {
            if (result.error_code === 1001) return res.status(404).json({ message: constant.DATA_MISSING })
            res.json({ message: constant.EXPENSE_UPDATED, result: result })
        }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

module.exports = {
    create,
    get,
    remove,
    update
}
