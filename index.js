const inquirer = require('inquirer')
const { readFile, writeFile } = require('fs').promises
const Circle = require('./utils/Circle.js')
const Triangle = require('./utils/Triangle.js')
const Square = require('./utils/Square.js')
// const {generateSq} = require('../utils/generateSq.js')


let svgQuestions = [
    {
        type: 'input',
        name: 'initials',
        message: "Type 3 letters for your SVG image."
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? (Color, or HEXCode)'
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Would you like a circle, square, or triangle?',
        choices: ['triangle', 'circle', 'square']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (Color, or HEXcode)'

    },
]

function init() {
    inquirer.prompt(svgQuestions)
        .then(res => {
            let svgImage
            switch (res.shape) {

                case "triangle":
                    svgImage = new Triangle(res.shapeColor, res.textColor, res.initials)
                    // const shape = res.choices
                    writeFile(`utils/images/logo.svg`, svgImage.render())
                    break
                case "circle":
                    svgImage = new Circle(res.shapeColor, res.textColor, res.initials)
                    // const shape = res.choices
                    writeFile(`utils/images/logo.svg`, svgImage.render())
                    break
                case "square":
                    svgImage = new Square(res.shapeColor, res.textColor, res.initials)
                    writeFile(`utils/images/logo.svg`, svgImage.render())
            }
        })
}


init()

