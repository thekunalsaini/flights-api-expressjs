const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/flightRoutes');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/FlightDB')
mongoose.connection.once('open', (err) => {
    if(!err){
        console.log("Connected to DB");
    } else {
        throw err;
    }
})
app.use(express.json());
app.use('/api',router);

let port = 3000 || process.env.PORT;
app.listen(port,() => {
    console.log(`Server is running at port ${port}`)
})