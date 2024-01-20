"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drop_1 = require("./drop");
const rain_1 = require("./rain");
function createBrightDrops(p, bright_drop_count) {
    let bright_drops = [];
    for (let i = 0; i < bright_drop_count; i++) {
        let color_gauss = p.randomGaussian(10, 5);
        bright_drops.push(new drop_1.BrightDrop(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.max(30, p.randomGaussian(30, 50)), Math.max(1, p.randomGaussian(2, 1)), 50, 0, [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 45 + p.randomGaussian(5, 1)]));
    }
    return bright_drops;
}
function createBckDrops(p, bck_drop_count) {
    let bck_drops = [];
    for (let i = 0; i < bck_drop_count; i++) {
        let color_gauss = p.randomGaussian(10, 5);
        bck_drops.push(new drop_1.Drop(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.max(300, p.randomGaussian(100, 50)), Math.max(1, p.randomGaussian(40, 10)), 30, 0, [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 2 + p.randomGaussian(2, 1)]));
    }
    return bck_drops;
}
let background_color = [7, 5, 28];
let n_bright_drops = 100;
let n_bck_drops = 100;
function defineTextBoxParams(p) {
    if (p.windowWidth > p.windowHeight) {
        let textbox_width = p.windowWidth / 2;
        let textbox_height = p.windowHeight / 3 * 2;
        let textbox_x = (p.windowWidth - textbox_width) / 2;
        let textbox_y = (p.windowHeight - textbox_height) / 2;
        return [textbox_x, textbox_y, textbox_width, textbox_height];
    }
    else {
        let textbox_width = 3 * p.windowWidth / 4;
        let textbox_height = p.windowHeight / 3 * 2;
        let textbox_x = (p.windowWidth - textbox_width) / 2;
        let textbox_y = (p.windowHeight - textbox_height) / 2;
        return [textbox_x, textbox_y, textbox_width, textbox_height];
    }
}
function styleTextBox(textbox_x, textbox_y, textbox_width, textbox_height) {
    document.getElementById('centeredInput').style.left = textbox_x + 'px';
    document.getElementById('centeredInput').style.top = textbox_y + 'px';
    document.getElementById('centeredInput').style.width = textbox_width + 'px';
    document.getElementById('centeredInput').style.height = textbox_height + 'px';
    document.getElementById('centeredInput').style.backgroundColor = 'rgba(75, 90, 125)';
}
var sketch = (p) => {
    let [textbox_x, textbox_y, textbox_width, textbox_height] = defineTextBoxParams(p);
    styleTextBox(textbox_x, textbox_y, textbox_width, textbox_height);
    let bright_drops = createBrightDrops(p, n_bright_drops);
    let bck_drops = createBckDrops(p, n_bck_drops);
    let rain = new rain_1.Rain(bright_drops, true, textbox_x, textbox_y, textbox_width);
    let bck_raind = new rain_1.Rain(bck_drops);
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(background_color);
        p.frameRate(50);
    };
    p.draw = () => {
        p.background(background_color);
        bck_raind.draw(p);
        rain.draw(p);
    };
};
new p5(sketch);
//# sourceMappingURL=main.js.map