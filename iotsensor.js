const sensordata = {
    id: 0,
    name: "temperaturesensor",
    address: "221 Burwood Hwy, Burwood VIC 3125",
    time: Date.now(),
    temperature: 20
    }
const low = 10;
const high = 40;
reading = Math.floor(Math.random() * (high - low) + low);
sensordata.temperature = reading;
const jsonString = JSON.stringify(sensordata);
console.log(jsonString);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://s223535784:s223535784@sit729-cluster.9ethvmx.mongodb.net/');
const Sensor = require('./models/sensor');

const newSensor = new Sensor({
    id: sensordata.id,
    name: sensordata.name,
    address: sensordata.address,
    time: sensordata.time,
    temperature: sensordata.temperature
    });
    newSensor.save().then(doc => {
    console.log(doc);
    }).then(() => {
    mongoose.connection.close();
    });