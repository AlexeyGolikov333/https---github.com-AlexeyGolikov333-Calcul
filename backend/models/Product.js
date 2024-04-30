const { Schema, model } = require('mongoose')

const Product = new Schema ({
    header: {
        type: String,
        required: true
    },
    pice: {
        type: Number        
    },
    image: {
        type: String       
    }
})

module.exports = model('Propuct', Product)