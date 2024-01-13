"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectedDrop = exports.BrightDrop = exports.Drop = void 0;
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
exports.BrightDrop = BrightDrop;
class ReflectedDrop extends BrightDrop {
    constructor(top_x, top_y, length, thickness, color) {
        super(top_x, top_y, length, thickness, 0, 0, color);
        this.wind = Math.tan(Math.random() * Math.PI / 4) * this.length;
        this.wind_dir = Math.random() > 0.5 ? 1 : -1;
        this.color = color;
        this.countdown = 2;
    }
    draw(p) {
        if (this.countdown > 0) {
            p.stroke(this.color);
            p.strokeWeight(this.thickness);
            p.line(this.top_x, this.top_y, this.top_x + this.wind * this.wind_dir, this.top_y - this.length);
            this.countdown -= 1;
        }
    }
}
exports.ReflectedDrop = ReflectedDrop;
//# sourceMappingURL=drop.js.map