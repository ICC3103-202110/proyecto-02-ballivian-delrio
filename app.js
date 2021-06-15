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
        //console.log(title)
        printTable(table)

        //Input - Action
        const action = await input_action(model)
        if(action['action'] == 'Add city'){
            const newlocation = await input_location(model)

            console.log("El input fue: ")
            console.log(newlocation['location'])

            //Ejecutar Api aqui
            console.log("Aqui Hago api")

            //supesto input
            updatedModel = await addCity(newlocation['location'], weatherInfo)

            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }

        else if(action['action'] == 'Update city'){
            const upCity = await input_update(model)
            //Ejecutar update city de Update aqui
            console.log("Actualize una cuidad")
            console.log(upCity['upCity'])

            updatedModel = await updateCity(upCity['upCity'], weatherInfo)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }

        else if(action['action'] == 'Delete city'){
            const delCity = await input_delCity(model)
            //Ejecutar delete city de Update aqui
            console.log("Borre una cuidad")
            console.log(delCity['delCity'])

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