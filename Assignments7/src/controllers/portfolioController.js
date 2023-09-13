async function portfolioControllercreate (req, res) {
    res.status(201).json({ status: 'create', data: 'portfolioControllercreate API' });
}

async function portfolioControllerread (req, res) {
    res.status(202).json({ status: 'red', data: 'portfolioControllerread API' });
}

async function portfolioControllerdelete (req, res) {
    res.status(202).json({ status: 'delete', data: 'portfolioControllerdelete API' });
}

async function portfolioControllerupdate (req, res) {
    res.status(200).json({ status: 'update', data: 'portfolioControllerupdate API' });
}

module.exports = {portfolioControllercreate,portfolioControllerread,portfolioControllerdelete,portfolioControllerupdate}