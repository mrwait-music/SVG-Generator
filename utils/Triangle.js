

const generateTri = () => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>
    <polygon points="50, 13.397 100, 100 0, 100" fill=${shapeColor}/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>
    </g>
    </svg>`
}

class Triangle {
    constructor(shapeColor, textColor, initials) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.initials = initials;
    }
}



module.exports = Triangle