const mongoose = require('mongoose');

const news_schema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
        unique: true
    },
    image : {
        type : Number,
        required: true,
    },
    content :{
        type : String,
    }
    
},{
    timestamps: true
});


const News = mongoose.model('News', news_schema) ;

module.exports = News;