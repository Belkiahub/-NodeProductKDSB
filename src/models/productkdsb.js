const mongoose = require('mongoose');

const productkdsbSchema = new mongoose.Schema({
    nombreKDSB: { type: String, required: true },
    descripcionKDSB: { type: String, required: true },
    precio: { type: Number, required: true }  // Already defined as Number
});

module.exports = mongoose.model('Product', productkdsbSchema);