const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).then(() => {
    console.log('connected to databse');
})