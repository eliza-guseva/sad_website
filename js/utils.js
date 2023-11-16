"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gauss = void 0;
function gauss(mean, std) {
    let u1 = Math.random();
    let u2 = Math.random();
    let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(Math.PI * 2 * u2);
    return mean + z0 * std;
}
exports.gauss = gauss;
//# sourceMappingURL=utils.js.map