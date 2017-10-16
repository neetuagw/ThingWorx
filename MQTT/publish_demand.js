var mqtt    = require('mqtt');

var demand = [30.5,29.5,30,29.8,29.7,29.6,29.9,
        29.1,29.9,29,29.5,29.5,32.7,33.3,38.3,44,52.7,
        63.9,67.2,68.7,69.7,67.7,69.1,65.2,64.4,63.2,65.7,
        65.6,68.4,68.8,68,64.1,63.7,59.1,50.8,48.1,46.4,
        42,39.6,32.4,30.5,31.2,29.7,29.4,29,28.9,29.2,28.9];

var currentFrequency = 5;

var pv_array = {pv:0};
var i = 0;

var client = mqtt.connect("mqtt://broker.mqttdashboard.com");
client.on('connect', function(){
    console.log("Client Connected!");

    // Schedules telemetry data upload once per second
    console.log('Publishing on Local Broker', currentFrequency);
    uploadInterval = setInterval(publishTelemetry, currentFrequency*1000);
});

function publishTelemetry(){
    i++;
    client.publish("demand/random", ""+demand[i])
    if(i == demand.length){
        i =0 ;
    }    
}