const { weatherInfo } = require("./model");

const axios = require('axios')
function wait(s){
    return new Promise(waiting => setTimeout(waiting, s*1000))
}
async function getinfoAPI(name){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7c1790a34d2312e2e7c0d2afbecf8fa0&units=metric`
    try{
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
    catch (error){
        console.log("Error ",error.response.data.cod, " ", error.response.data.message)
        await wait(1.5)
        const cityInfo = {
            name: "Error_city",
        }
        return cityInfo
    } 
    
}

async function addCity(name, model){

    var cityInfo = await getinfoAPI(name)
    if(cityInfo.name == 'Error_city'){
        return model
    }
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
    return model
}
module.exports = {addCity, updateCity, deleteCity}