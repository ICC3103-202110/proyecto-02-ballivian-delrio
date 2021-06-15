const { weatherInfo } = require("./model");

const axios = require('axios')

async function getinfoAPI(name){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7c1790a34d2312e2e7c0d2afbecf8fa0&units=metric`

    //No borrar esto por que asi podemos detectar errores
    /*
    axios.get(url)
    .then(function(response){
        console.log(response.data.main)
    })
    .catch(function (error){ 
        //Aqui saco errores en caso de
        console.log(error)
        console.log("Cagaso Error")
    })
    .finally(function(){
        console.log("All Done")
    })
    */
    const Info = await axios.get(url)
    
    console.log(Info.data.main)
    const cityInfo = {
        name: name,
        temp: Info.data.main.temp,
        max: Info.data.main.temp_max,
        min: Info.data.main.temp_min
    }
    return cityInfo
}

async function addCity(name, model){

    var cityInfo = await getinfoAPI(name)

    //console.log(cityInfo.name)
    //console.log(cityInfo.temp)
    //console.log(cityInfo.max)
    //console.log(cityInfo.min)
    
    //Añadir aqui la info a weather 

    newCity = {
        name: cityInfo.name,
        temp: cityInfo.temp,
        max: cityInfo.max,
        min: cityInfo.min
    }
    
    model.push(newCity)
    return model
}
async function updateCity(name, model){
    var newcityInfo = await getinfoAPI(name)
    for(var i = 0; i<model.length; i++){
        if(model[i].name == name){
            model[i] = newcityInfo
            break
        }
    }
    return model
}
async function deleteCity(name, model){
    for(var i = 0; i<model.length; i++){
        if(model[i].name == name){
            model.splice(i, 1)
            break
        }
    }
}
//console.log(getinfoAPI('aaa')) 

module.exports = {addCity, updateCity, deleteCity}