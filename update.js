const { weatherInfo } = require("./model");

function addCity(cityInfo, weatherInfo){
    console.log(cityInfo.name)
    console.log(cityInfo.temp)
    console.log(cityInfo.max)
    console.log(cityInfo.min)

    //Añadir aqui la info a weather 
    /*
    weatherInfo[String(cityInfo.name)] = {
        name: cityInfo.name,
        temp: cityInfo.temp,
        max: cityInfo.max,
        min: cityInfo.min
    }
    return{weatherInfo}
    */
    
    
    return{
        ...weatherInfo,
        name: cityInfo.name,
        temp: cityInfo.temp, 
        max: cityInfo.max, 
        min:cityInfo.min
    }
    
    
}
module.exports = {addCity}