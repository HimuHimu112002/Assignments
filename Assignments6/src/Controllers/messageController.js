async function messageCreate(req, res) {
    res.send("Message Create API")
}
async function messageRead(req, res) {
    res.send("Message Read API")
}
async function messageUpdate(req, res) {
    res.send("Message Update API")
}
async function messageDelete(req, res) {
    res.send("Message Delete API")
}
module.exports = {messageCreate,messageRead,messageUpdate,messageDelete}