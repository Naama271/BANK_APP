const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/myBank', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



// mongoose.connect('mongodb+srv://naama:naama271@cluster0.di2zf.mongodb.net/test', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
