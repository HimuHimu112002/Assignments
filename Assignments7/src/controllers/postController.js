async function postControllercreate (req, res) {
    res.status(201).json({ status: 'create', data: 'postControllercreate API' });
}

async function postControllerread (req, res) {
    res.status(202).json({ status: 'red', data: 'postControllerread API' });
}

async function postControllerdelete (req, res) {
    res.status(202).json({ status: 'delete', data: 'postControllerdelete API' });
}

async function postControllerupdate (req, res) {
    res.status(200).json({ status: 'update', data: 'postControllerupdate API' });
}

module.exports = {postControllercreate,postControllerread,postControllerdelete,postControllerupdate}