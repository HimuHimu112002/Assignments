async function commentCreate(req, res) {
    res.send("Comment Create API")
}
async function commentRead(req, res) {
    res.send("Comment Read API")
}
async function commentUpdate(req, res) {
    res.send("Comment Update API")
}
async function commentDelete(req, res) {
    res.send("Comment Delete API")
}
module.exports = {commentCreate,commentRead,commentUpdate,commentDelete}