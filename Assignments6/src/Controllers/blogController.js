async function createBlog(req, res) {
    res.send("Create Blog API")
}
async function readBlog(req, res) {
    res.send("Read Blog API")
}
async function updateBlog(req, res) {
    res.send("Update Blog API")
}
async function deleteBlog(req, res) {
    res.send("Delete Blog API")
}
module.exports = {createBlog,readBlog,updateBlog,deleteBlog}