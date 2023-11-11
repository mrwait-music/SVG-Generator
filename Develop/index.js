const inquirer = require('inquirer')
const {readFile, writeFile} = require('fs').promises
const {generateSVG} = require('../../utils/generateSVG')

let svgQuestions = [
    {
        type: 'input',
        name: 'initials',
        message: "Type 3 letters for your SVG."
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? (Color, or HEXCode)'
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Would you like a circle, square, or triangle?'
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (Color, or HEXcode)'

    }

]

module.exports = index