async function createService(req, res) {
    res.send("Create Service API")
}
async function readService(req, res) {
    res.send("Read Service API")
}
async function updateService(req, res) {
    res.send("Update Service API")
}
async function deleteService(req, res) {
    res.send("Delete Service API")
}
module.exports = {createService,readService,updateService,deleteService}