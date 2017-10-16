var mqtt    = require('mqtt');

var soc = [60,60, 60,45,60,
    60,60, 61, 69,71,72 ,75,
    82,89,87,80,90,100,60,
    20,60,60,60,60,60]

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
    client.publish("soc/random", ""+soc[i]);
    if(i == soc.length){
        i =0 ;
    }    
}