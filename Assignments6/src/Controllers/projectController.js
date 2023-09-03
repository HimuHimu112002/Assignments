async function createProject(req, res) {
    res.send("Create Project API")
}
async function readProject(req, res) {
    res.send("Read Project API")
}
async function updateProject(req, res) {
    res.send("Update Project API")
}
async function deleteProject(req, res) {
    res.send("Delete Project API")
}
module.exports = {createProject,readProject,updateProject,deleteProject}