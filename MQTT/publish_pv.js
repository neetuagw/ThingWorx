var mqtt    = require('mqtt');

var pv = [0,0,0,0,0,3.100908498,30.17516897,87.79698672,181.3580004,
    310.9373173,416.0124072,493.008671,519.6886693,495.9394854,
    465.4692144,388.0881496,294.9571294,211.1334849,130.5881132,
    58.29295292,14.33925411,0.342888294,0,0,0];

//var power_demand = [30.5,29.5,30,29.8,29.7,29.6,29.9,
        //29.1,29.9,29,29.5,29.5,32.7,33.3,38.3,44,52.7,
        //63.9,67.2,68.7,69.7,67.7,69.1,65.2,64.4,63.2,65.7,
        //65.6,68.4,68.8,68,64.1,63.7,59.1,50.8,48.1,46.4,
        //42,39.6,32.4,30.5,31.2,29.7,29.4,29,28.9,29.2,28.9];

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
    client.publish("pv/random", pv[i]);
    //client.publish("power/random", ""+power_demand[i])
    if(i == pv.length){
        i =0 ;
    }    
}