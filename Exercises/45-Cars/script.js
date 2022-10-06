
//Excerise No. 45. 


var carObject = {manufacturer: "", modelName: "", car:""};


function carInformation(manufacturer, modelName, car){
    carObject = {manufacturer: manufacturer,
        modelName: modelName,
        color: car.color,
        feature: car.feature
        
        
    }
}

carInformation("toyota", "v8", {"color": "white", "feature": "automatic"});

console.log(carObject);