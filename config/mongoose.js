const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost/mynews");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "err while connecting to db"));
db.once('open', function(){
    console.log('connected to news database')
})

