async function createBlogDetail(req, res) {
    res.send("Create Blog Detail API")
}
async function readBlogDetail(req, res) {
    res.send("Blog Detail Read API")
}
async function updateBlogDetail(req, res) {
    res.send("Blog Detail Update API")
}
async function deleteBlogDetail(req, res) {
    res.send("Blog Detail Delete API")
}
module.exports = {createBlogDetail,readBlogDetail,updateBlogDetail,deleteBlogDetail}