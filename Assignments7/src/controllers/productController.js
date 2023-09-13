async function productControllercreate (req, res) {
    res.status(201).json({ status: 'create', data: 'productControllercreate API' });
}

async function productControllerread (req, res) {
    res.status(202).json({ status: 'red', data: 'productControllerread API'});
}

async function productControllerdelete (req, res) {
    res.status(202).json({ status: 'delete', data: 'productControllerdelete API' });
}

async function productControllerupdate (req, res) {
    res.status(200).json({ status: 'update', data: 'productControllerupdate API' });
}

module.exports = {productControllercreate,productControllerread,productControllerdelete,productControllerupdate}