const { weatherInfo } = require("./model");

function addCity(cityInfo, model){
    //En vez de recivir toda la info
    //Reciva un nombre y de ahi saque de la
    //Api la info.
    /*
    console.log(cityInfo.name)
    console.log(cityInfo.temp)
    console.log(cityInfo.max)
    console.log(cityInfo.min)
    */
    //Añadir aqui la info a weather 

    newCity = {
        name: cityInfo.name,
        temp: cityInfo.temp,
        max: cityInfo.max,
        min: cityInfo.min
    }
    
    model.push(newCity)
    return model
    /*
    weatherInfo[String(cityInfo.name)] = {
        name: cityInfo.name,
        temp: cityInfo.temp,
        max: cityInfo.max,
        min: cityInfo.min
    }
    return{weatherInfo}
    */
    
    
}
module.exports = {addCity}