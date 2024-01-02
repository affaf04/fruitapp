const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Perfume = mongoose.model('Fruit', perfumeSchema);

module.exports = Perfume;