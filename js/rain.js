"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rain = void 0;
const drop_1 = require("./drop");
class Rain extends Array {
    constructor(p, drops) {
        super(...drops);
        this.draw = (p) => {
            for (let i = 0; i < this.length; i++) {
                this[i].draw(p);
                this[i].top_y += this[i].speed;
                if (this[i].top_y >= p.height) {
                    this[i].top_y = 0 - 2 * this[i].length * p.random();
                    this[i].top_x = p.random() * p.width;
                    this[i].length = drop_1.Drop.setRandLength(p);
                    this[i].thickness = drop_1.Drop.setRandThickness(p);
                    this[i].speed = drop_1.Drop.setRandSpeed(p);
                    this[i].wind = drop_1.Drop.setRandWind(p);
                    this[i].color = drop_1.Drop.setRandColor(p);
                }
            }
        };
        this.p = p;
    }
}
exports.Rain = Rain;
//# sourceMappingURL=rain.js.map