"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitText = void 0;
const axios_1 = require("axios");
const drop_1 = require("./drop");
const rain_1 = require("./rain");
let button_height = 40;
let fieldsBackground = 'rgba(17, 22, 40, 0.9)';
function submitText() {
    var textBoxValue = document.getElementById("centeredInput").value;
    console.log(textBoxValue);
    var apiEndpoint = "http://127.0.0.1:8080/flask/hello";
    axios_1.default.post(apiEndpoint, {
        type: "words",
        message: textBoxValue
    })
        .then(function (response) {
        console.log(response);
        document.getElementById("centeredInput").value = response.data.message;
    });
}
exports.submitText = submitText;
function createTextBoxContainer(textbox_x, textbox_y, textbox_width, textbox_height) {
    var myContainer = document.createElement('div');
    myContainer.id = 'myContainer';
    myContainer.style.position = 'absolute';
    myContainer.style.display = 'flex';
    myContainer.style.flexDirection = 'column';
    myContainer.style.left = textbox_x + 'px';
    myContainer.style.top = textbox_y + 'px';
    myContainer.style.width = textbox_width + 'px';
    myContainer.style.height = textbox_height + 'px';
    myContainer.style.backgroundColor = 'rgba(7, 5, 21, 0.05)';
    document.body.appendChild(myContainer);
}
function createTextBox(textbox_x, textbox_y, textbox_width, textbox_height) {
    var centeredInput = document.createElement('textarea');
    centeredInput.id = 'centeredInput';
    centeredInput.style.left = textbox_x + 'px';
    centeredInput.style.top = textbox_y + 'px';
    centeredInput.style.width = textbox_width + 'px';
    centeredInput.style.height = textbox_height - button_height - 5 + 'px';
    centeredInput.style.backgroundColor = fieldsBackground;
    centeredInput.style.color = 'rgba(255, 255, 255, 1)';
    centeredInput.style.border = 3 + 'px solid rgba(17, 15, 25, 1)';
    centeredInput.placeholder = 'What is on your mind?';
    centeredInput.style.resize = 'none';
    centeredInput.style.outline = 'none';
    document.getElementById('myContainer').appendChild(centeredInput);
}
function createButton(button_height, textbox_width) {
    var submit = document.createElement('button');
    submit.style.height = button_height + 'px';
    submit.style.width = textbox_width + 'px';
    submit.style.marginTop = 5 + 'px';
    submit.style.backgroundColor = fieldsBackground;
    submit.style.color = 'rgba(255, 255, 255, 1)';
    submit.style.border = 3 + 'px solid rgba(17, 15, 25, 1)';
    submit.style.borderRadius = 5 + 'px';
    document.getElementById('myContainer').appendChild(submit);
    submit.onclick = submitText;
    submit.innerHTML = 'Give me a reason to be sad';
    submit.onmouseover = function () {
        submit.style.boxShadow = '0px 0px 10px 2px rgba(255, 255, 255, 0.5)';
    };
    submit.onmouseout = function () {
        submit.style.boxShadow = 'none';
    };
}
function createAllElements(textbox_x, textbox_y, textbox_width, textbox_height) {
    createTextBoxContainer(textbox_x, textbox_y, textbox_width, textbox_height);
    createTextBox(textbox_x, textbox_y, textbox_width, textbox_height);
    createButton(button_height, textbox_width);
}
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
        bck_drops.push(new drop_1.Drop(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.max(300, p.randomGaussian(100, 50)), Math.max(1, p.randomGaussian(40, 10)), 30, 0, [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, Math.max(0.1, p.randomGaussian(3, 1))]));
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
var sketch = (p) => {
    let [textbox_x, textbox_y, textbox_width, textbox_height] = defineTextBoxParams(p);
    createAllElements(textbox_x, textbox_y, textbox_width, textbox_height);
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