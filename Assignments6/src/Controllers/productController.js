async function createProduct(req, res) {
    res.send("Create Product API")
}
async function readProduct(req, res) {
    res.send("Read Product API")
}
async function updateProduct(req, res) {
    res.send("Update Product API")
}
async function deleteProduct(req, res) {
    res.send("Delete Product API")
}
module.exports = {createProduct,readProduct,updateProduct,deleteProduct}