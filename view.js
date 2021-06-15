const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function weatherTitle(){
    return chalk.blue(
        figlet.textSync('Weather App', {horizontalLayout: 'full', font: 'colossal'}) 
    )
}
function weatherTable(model){
    const modelList = []
    for(var i = 0; i < model.length; i++){
        var city = {
            name: model[i].name, 
            temp: model[i].temp,
            max: model[i].max,
            min: model[i].min
        }
        modelList.push(city)
    }
    console.log(modelList)
    return modelList
}
function input_action(model){
    if(model.length == 0){
        const choices = ['Add city']
        return inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Select action:',
                default: 'Add city',
                choices: choices
            }
        ])
    }
    else{
        const choices = ['Add city', 'Update city', 'Delete city']
        return inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Select action:',
                default: 'Add city',
                choices: choices
            }
        ])
    }

}
function input_location(model){
    return inquirer.prompt([
        {
            name: 'location',
            type: 'input',
            message: 'Location? ',
        }
    ])
}
function input_update(model){
    var choices = []
    for(var i=0;i<model.length;i++){
        choices.push(model[i].name)
    }
    return inquirer.prompt([
        {
            name: 'upCity',
            type: 'list',
            message: 'Update city: ',
            choices: choices
        }
    ])
}
function input_delCity(model){
    var choices = []
    for(var i=0;i<model.length;i++){
        choices.push(model[i].name)
    }
    return inquirer.prompt([
        {
            name: 'delCity',
            type: 'list',
            message: 'Delete city: ',
            choices: choices
        }
    ])
}
function view(model){
    console.log("HERE")
    console.log(model)
    return{
        title: weatherTitle(),
        table: weatherTable(model)
    }
}
module.exports = {view, input_action, input_location, input_update, input_delCity}