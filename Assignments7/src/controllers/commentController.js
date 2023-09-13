async function commentControllercreate(req, res) {
    res.status(201).json({ status: 'create', data: 'commentControllercreate API' });
}

async function commentControllerread(req, res) {
    res.status(204).json({ status: 'red', data: 'commentControllerread API' });
}

async function commentControllerdelete(req, res) {
    res.status(202).json({ status: 'delete', data: 'commentControllerdelete API' });
}

async function commentControllerupdate(req, res) {
    res.status(202).json({ status: 'update', data: 'commentControllerupdate API' });
}

module.exports = {commentControllercreate,commentControllerread,commentControllerdelete,commentControllerupdate}