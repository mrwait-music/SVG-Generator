
class Triangle {
    constructor(shapeColor, textColor, initials) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.initials = initials;
    } 
    render() { 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>

</svg>`
    }
}



module.exports = Triangle