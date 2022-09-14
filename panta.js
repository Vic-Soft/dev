#!/usr/bin/env node 
let tempParams = {
    kelvinTemp: 273,
    celcious: 24,
}

function param(art) {
    let parse = console.log(tempParams.kelvinTemp + tempParams.celcious + `${art}`);
}

param(" degree centigrade");
