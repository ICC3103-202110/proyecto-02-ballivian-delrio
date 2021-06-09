const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function weatherTitle(){
    return chalk.blue(
        figlet.textSync('Weather App', {horizontalLayout: 'full', font: 'colossal'}) 
    )
}
function weatherTable(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return[
        {
            'name': `${name}`,
            'temp': `${temp}`,
            'max': `${max}`,
            'min': `${min}`
        }
    ]
}
function view(model){
    return{
        title: weatherTitle(),
        table: weatherTable(model)
    }
}
module.exports = {view}