async function subAdminControllercreate(req, res) {
    res.status(201).json({ status: 'create', data: 'subAdminControllercreate API' });
}

async function subAdminControllerread(req, res) {
    res.status(202).json({ status: 'red', data: 'subAdminControllerread API' });
}

async function subAdminControllerdelete(req, res) {
    res.status(202).json({ status: 'delete', data: 'subAdminControllerdelete API' });
}

async function subAdminControllerupdate(req, res) {
    res.status(202).json({ status: 'update', data: 'subAdminControllerupdate API' });
}

module.exports = {subAdminControllercreate,subAdminControllerread,subAdminControllerdelete,subAdminControllerupdate}