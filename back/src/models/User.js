const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    mail: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    phone: { type: Number, require: true },
    status: {type: Boolean, require: true, default: true},
    donations: [{type: Number}],
    animalId: [{
        type: Schema.Types.ObjectId,
        ref: "Animal"
    }]
},
    { timestamps: true } 
);

module.exports = mongoose.model('User', userSchema);