require('dotenv').config();
require('./connections/database')
const express = require('express');
const cors = require('cors');
const Order= require('./schemas/schema');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    console.log("Server Running");
})
app.post("/placeorder",async(request,response)=>{
  const { email, cart, amount, address } = request.body;
    try {
        const newOrder = new Order({
            email,
            order: cart,
            amount,
            address,
        });
        await newOrder.save();
        console.log("saved");
        
       response.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error("Error saving order:", error);
       response.status(500).json({ message: "Server error", error });
    }
})