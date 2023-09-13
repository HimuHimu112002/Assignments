async function messageControllercreate (req, res) {
    res.status(201).json({ status: 'create', data: 'messageControllercreate API' });
}

async function messageControllerread (req, res) {
    res.status(202).json({ status: 'red', data: 'messageControllerread API' });
}

async function messageControllerdelete (req, res) {
    res.status(202).json({ status: 'delete', data: 'messageControllerdelete API' });
}

async function messageControllerupdate (req, res) {
    res.status(200).json({ status: 'update', data: 'messageControllerupdate API' });
}

module.exports = {messageControllercreate,messageControllerread,messageControllerdelete,messageControllerupdate}