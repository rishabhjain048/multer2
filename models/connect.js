const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/multer2')
.then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
})