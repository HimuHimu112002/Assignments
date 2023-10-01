async function adminControllercreate (req, res) {
    res.status(201).json({ status: 'create', data: 'adminControllercreate API' });
}

async function adminControllerread (req, res) {
    res.status(202).json({ status: 'red', data: 'adminControllerread API'});
}

async function adminControllerdelete (req, res) {
    res.status(202).json({ status: 'delete', data: 'adminControllerdelete API' });
}

async function adminControllerupdate (req, res) {
    res.status(200).json({ status: 'update', data: 'adminControllerupdate API' });
}

module.exports = {adminControllercreate,adminControllerread,adminControllerdelete,adminControllerupdate}