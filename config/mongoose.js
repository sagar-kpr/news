const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://sagarkpr:sagar123@cluster0.odss0vq.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "err while connecting to db"));
db.once('open', function(){
    console.log('connected to news database')
})

