const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const animalSchema = new Schema({
    name: { type: String, required: true },
    img: {type: String},
    description: {type: String, required: true},
    location: {type: String, required: true},
    age: {type: Number, required: true},
    size: {type: String, enum: ['Chico', 'Mediano', "Grande"], required: true},
    sex: {type: String, enum: ['Hembra', 'Macho'], required: true},
    condition: {type: Boolean, default: false},
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    { timestamps: true } 
);

module.exports = mongoose.model('Animal', animalSchema);