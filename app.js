const {Table, printTable} = require('console-table-printer')

const { weatherInfo } = require('./model')
const {addCity} = require('./update');
const { view } = require('./view');

const wTable = new Table();

async function app(state, addCity){
    const {model, currentView} = state
    const {title, table} = currentView



    //Interface
    console.clear()
    //console.log(title)
    //printTable(table)
    console.log(state.model)
    //supesto input
    cityInfo = {name: "Santiago", temp: 17, max: 20, min: 10}
    
    updatedModel = addCity(cityInfo, weatherInfo)

    console.log(updatedModel)
    state = {
        ...state,
        model: updatedModel,
        currentView: view(updatedModel)
    }
    wTable.addRow(table)
    printTable(table)
    console.log(state.model)
}   
module.exports = {app}