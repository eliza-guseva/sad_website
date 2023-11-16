"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drop_1 = require("./drop");
const rain_1 = require("./rain");
let background_color = [57, 65, 85];
let drop_count = 500;
let drops = [];
var sketch = (p) => {
    for (let i = 0; i < drop_count; i++) {
        drops.push(drop_1.Drop.getRandDrop(p));
    }
    let rain = new rain_1.Rain(p, drops);
    p.setup = () => {
        console.log(rain);
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(background_color);
    };
    p.draw = () => {
        p.background(background_color);
        rain.draw(p);
        p.fill(95, 100, 115, 255);
        p.rect(p.width / 2 - 500, p.height / 2 - 300, 1000, 800);
    };
};
new p5(sketch);
//# sourceMappingURL=main.js.map