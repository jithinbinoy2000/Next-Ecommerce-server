const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        // required: true,
    },
    order: {
        type: Array,
        // required: true,
    },
    amount: {
        type: Number,
        // required: true,
    },
    address: {
        type: Array,
        // required: true,
    },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order
