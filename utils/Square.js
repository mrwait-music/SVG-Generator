

class Square {
    constructor(shapeColor, textColor, initials) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.initials = initials;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> */}

<rect x="100" y="50" width="100" height="100" stroke="" fill="${this.shapeColor}" stroke-width="5"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>

</svg>`

    }
}

module.exports = Square;