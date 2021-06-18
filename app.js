const {Table, printTable} = require('console-table-printer')

const { weatherInfo } = require('./model')
const {addCity, updateCity, deleteCity} = require('./update');
const { view, input_action, input_location, input_update, input_delCity } = require('./view');

async function app(state, update){
    while(true){
        const {model, currentView} = state
        const {title, table} = currentView
        //Interface =========
        console.clear()
        console.log(title)
        if(model.length>=1){
            printTable(table)
        }else{
            console.log("NO CITIES")
        }

        

        //Input - Action
        const action = await input_action(model)
        if(action['action'] == 'Add city'){
            const newlocation = await input_location(model)
            updatedModel = await addCity(newlocation['location'], weatherInfo)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }

        else if(action['action'] == 'Update city'){
            const upCity = await input_update(model)
            updatedModel = await updateCity(upCity['upCity'], weatherInfo)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }

        else if(action['action'] == 'Delete city'){
            const delCity = await input_delCity(model)
            updatedModel = await deleteCity(delCity['delCity'], weatherInfo)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
    }

}
module.exports = {app}