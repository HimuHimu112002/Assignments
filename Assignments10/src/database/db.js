const mongoose = require('mongoose')
async function DatabaseConnection() {
    await mongoose.connect('mongodb+srv://Assignments:57f1vlDFSmj3oUxr@cluster0.o72kxch.mongodb.net/Assignments?retryWrites=true&w=majority').then(() =>{
        console.log("Database Connection Complete")
    });
}
module.exports = DatabaseConnection;