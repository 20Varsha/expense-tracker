const constant = require("../constants/constants");
const category_service = require("../service/category")

const create = async (req, res) => {
    try {
        const result = await category_service.create(req.body)
        if (result) { res.status(200).json({ status:"succes",message: constant.CATEGORY_CREATED, result: result }) }
        else { res.status(500).json({ message: err.message }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const get = async (req, res) => {
    try {
        const result = await category_service.get();
        if (result) { res.status(200).json({status:"succes", message: constant.FETCH_CATEGORY, count: result.length, data: result, error_code: 0 }) }
        else { res.status(500).json({ message: constant.ERROR, }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const remove = async (req, res) => {
    try {
        const result = await category_service.remove(req.params.id);
        if (result.error_code == 1001) return res.status(404).json({status:"succes", message: constant.DATA_MISSING })
        res.status(200).json({ message: constant.CATEGORY_DELETE, result: result });
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const update = async (req, res) => {
    try {
        const result = await category_service.update(req.params.id, req.body);
        if (result) {
            if (result.error_code === 1001) return res.status(404).json({ status:"succes",message: constant.DATA_MISSING })
            res.json({ message: constant.CATEGORY_UPDATED, result: result })
        }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

module.exports = {
    create,
    get,
    remove,
    update
}
