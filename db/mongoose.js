const mongoose = require('mongoose')

//Database Name -> dec_11
mongoose.connect('mongodb://localhost:27017/Facebook',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})