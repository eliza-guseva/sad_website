"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drop = void 0;
const utils_1 = require("./utils");
class Drop {
    constructor(top_x, top_y, length, thickness, speed, wind, color) {
        this.top_x = top_x;
        this.top_y = top_y;
        this.length = length;
        this.thickness = thickness;
        this.speed = Math.max(speed / 2, speed * Math.pow(Math.random(), 1 / 3));
        this.wind = wind;
        this.color = color;
    }
    draw(p) {
        p.stroke(this.color);
        p.strokeWeight(this.thickness);
        p.line(this.top_x, this.top_y, this.top_x, this.top_y + this.length);
    }
    static getRandDrop(p) {
        return new Drop(this.setRandTopX(p), this.setRandTopY(p), this.setRandLength(p), this.setRandThickness(p), this.setRandSpeed(p), this.setRandWind(p), this.setRandColor(p));
    }
    static setRandTopX(p) {
        return p.random() * p.width;
    }
    static setRandTopY(p) {
        return p.random() * p.height;
    }
    static setRandLength(p) {
        return Math.max(90, (0, utils_1.gauss)(100, 30));
    }
    static setRandThickness(p) {
        return Math.max(1, (0, utils_1.gauss)(1, 2));
    }
    static setRandSpeed(p) {
        return Math.max(100, 10 + (0, utils_1.gauss)(100, 50));
    }
    static setRandWind(p) {
        return 0;
    }
    static setRandColor(p) {
        let color_gauss = (0, utils_1.gauss)(10, 5);
        return [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 65 + (0, utils_1.gauss)(5, 5)];
    }
}
exports.Drop = Drop;
class BrightDrop extends Drop {
    constructor(top_x, top_y, length, thickness, speed, wind, color) {
        super(top_x, top_y, length, thickness, speed, wind, color);
        this.random = Math.pow(Math.random(), 2);
    }
    draw(p) {
        super.draw(p);
        let bright_len = this.length * this.random;
        let wiggle_room = this.length - bright_len;
        let bright_init_y = this.top_y + this.length - bright_len - wiggle_room * Math.pow(this.random, 2);
        p.strokeWeight(this.thickness / 2);
        p.stroke(this.color.map((x) => { return x + 30; }));
        p.line(this.top_x, bright_init_y, this.top_x, bright_init_y + bright_len);
    }
}
//# sourceMappingURL=drop.js.map