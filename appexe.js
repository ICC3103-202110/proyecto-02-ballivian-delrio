const {weatherInfo} = require('./model')
const {update} = require('./update')
const {view} = require('./view')
const {app} = require('./app')

const state = {
    model: weatherInfo,
    currentView: view(weatherInfo)
}
state.model.splice(0, 1)

app(state, update, view)