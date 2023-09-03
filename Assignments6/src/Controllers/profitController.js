async function createProfile(req, res) {
    res.send("Create Profile API")
}
async function readProfile(req, res) {
    res.send("Read Profile API")
}
async function updateProfile(req, res) {
    res.send("Update Profile API")
}
async function deleteProfile(req, res) {
    res.send("Delete Profile API")
}
module.exports = {createProfile,readProfile,updateProfile,deleteProfile}