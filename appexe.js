const {initModel, weatherInfo} = require('./model')
const {addCity} = require('./update')
const {view} = require('./view')
const {app} = require('./app')

const state = {
    //model: initModel,
    currentView: view(weatherInfo),
    model: weatherInfo
}

app(state, addCity)