"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rain = void 0;
const drop_1 = require("./drop");
class Rain extends Array {
    constructor(drops, is_reflected = false, textbox_x = 0, textbox_y = 0, textbox_width = 0) {
        super(...drops);
        this.draw = (p) => {
            for (let i = 0; i < this.length; i++) {
                this[i].draw(p);
                this[i].top_y += this[i].speed;
                if (this[i].top_y >= p.height) {
                    this[i].top_y = 0 - 2 * this[i].length * p.random();
                    this[i].top_x = p.random() * p.width;
                }
                let bottom_y = this[i].top_y + this[i].length;
                let at_textbox_y = bottom_y >= this.textbox_y && bottom_y <= this.textbox_y + this[i].length;
                let at_textbox_x = this[i].top_x >= this.textbox_x && this[i].top_x <= this.textbox_x + this.textbox_width;
                if (this.is_reflected && at_textbox_y && at_textbox_x) {
                    this.reflections.push(new drop_1.ReflectedDrop(this[i].top_x, this.textbox_y, p.randomGaussian(35, 5), 3.5, this[i].color));
                }
            }
            for (let i = 0; i < this.reflections.length; i++) {
                this.reflections[i].draw(p);
            }
        };
        this.createDrops = (p) => {
            for (let i = 0; i < this.length; i++) {
                this[i] = new drop_1.Drop(p.random() * p.width, p.random() * p.height, 200, 2, 4, 0, [125, 135, 138, 20]);
            }
        };
        this.textbox_x = textbox_x;
        this.textbox_y = textbox_y;
        this.is_reflected = is_reflected;
        this.reflections = [];
    }
}
exports.Rain = Rain;
//# sourceMappingURL=rain.js.map