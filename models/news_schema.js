const mongoose = require('mongoose');

const news_schema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
        unique: true

    },
    image : {
        type : String,
        required: true,
    },
    content :{
        type : String,
        required: true,
        
    },
    url: {
        type : String,
        required: true,

    },
    category :{
        type : String,
        required: true,
        
    }
    
},{
    timestamps: true
});


const News = mongoose.model('News', news_schema) ;

module.exports = News;