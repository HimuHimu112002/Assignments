async function createTitle(req, res) {
    res.send("Create Title API")
}
async function readTitle(req, res) {
    res.send("Read Title API")
}
async function updateTitle(req, res) {
    res.send("Update Title API")
}
async function deleteTitle(req, res) {
    res.send("Delete Title API")
}
module.exports = {createTitle,readTitle,updateTitle,deleteTitle}