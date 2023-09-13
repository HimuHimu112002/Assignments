async function blogControllerCreate(req, res) {
    res.status(201).json({ status: 'create', data: 'blogControllerCreate Rest API' });
}

async function blogControllerread(req, res) {
    res.status(202).json({ status: 'red', data: 'blogControllerread Rest API' });
}

async function blogControllerdelete(req, res) {
    res.status(202).json({ status: 'delete', data: 'blogControllerdelete Rest API' });
}

async function blogControllerupdate(req, res) {
    res.status(200).json({ status: 'update', data: 'bblogControllerupdate Rest API' });
}

module.exports = {blogControllerCreate,blogControllerread,blogControllerdelete,blogControllerupdate}