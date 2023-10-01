async function userControllerrCreate(req, res) {
    res.status(201).json({ status: 'create', data: 'UserControllerCreate Rest API' });
}

async function userControllerread(req, res) {
    res.status(202).json({ status: 'red', data: 'userControllerread Rest API' });
}

async function userControllerdelete(req, res) {
    res.status(202).json({ status: 'delete', data: 'userControllerdelete Rest API' });
}

async function userControllerupdate(req, res) {
    res.status(200).json({ status: 'update', data: 'userControllerupdate Rest API' });
}

module.exports = {userControllerrCreate,userControllerread,userControllerdelete,userControllerupdate}