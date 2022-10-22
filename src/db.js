const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_CON || 'mongodb://localhost:27017')
    .then(() => console.log("DB connected"))
    .catch(e => console.log(`Failed to connect ${e}`))