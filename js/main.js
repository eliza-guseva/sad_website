"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drop_1 = require("./drop");
const rain_1 = require("./rain");
function createBrightDrops(p) {
    let bright_drop_count = 300;
    let bright_drops = [];
    for (let i = 0; i < bright_drop_count; i++) {
        let color_gauss = p.randomGaussian(10, 5);
        bright_drops.push(new drop_1.BrightDrop(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.max(30, p.randomGaussian(30, 50)), Math.max(1, p.randomGaussian(2, 1)), 50, 0, [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 45 + p.randomGaussian(5, 1)]));
    }
    return bright_drops;
}
function createBckDrops(p) {
    let bck_drop_count = 200;
    let bck_drops = [];
    for (let i = 0; i < bck_drop_count; i++) {
        let color_gauss = p.randomGaussian(10, 5);
        bck_drops.push(new drop_1.Drop(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.max(300, p.randomGaussian(100, 50)), Math.max(1, p.randomGaussian(40, 10)), 100, 0, [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 2 + p.randomGaussian(2, 1)]));
    }
    return bck_drops;
}
let background_color = [7, 5, 28];
var sketch = (p) => {
    let textbox_x = p.windowWidth / 2 - 250;
    let textbox_y = p.windowHeight / 2 - 300;
    let textbox_width = 500;
    let textbox_height = 600;
    console.log(p.windowWidth, p.windowHeight);
    console.log(textbox_x, textbox_y, textbox_width, textbox_height);
    let bright_drops = createBrightDrops(p);
    let bck_drops = createBckDrops(p);
    let rain = new rain_1.Rain(bright_drops, true, textbox_x, textbox_y, textbox_width);
    let bck_raind = new rain_1.Rain(bck_drops);
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(background_color);
        p.frameRate(5);
    };
    p.draw = () => {
        p.background(background_color);
        bck_raind.draw(p);
        rain.draw(p);
        p.fill(75, 90, 125, 255);
    };
};
new p5(sketch);
//# sourceMappingURL=main.js.map