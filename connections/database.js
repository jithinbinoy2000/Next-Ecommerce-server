const mongoose = require('mongoose');
const connectionString = process.env.CONNECTIONSTRING;
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB connection Established");
}).catch((error)=>{
    console.error(`MongoDB Error: ${error}`);
    
})