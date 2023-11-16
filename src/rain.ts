import { Drop } from './drop';


export class Rain extends Array<Drop> {
    p: p5;
    // is created from an Array of Drops
    constructor(
        p: p5, 
        drops: Array<Drop>
    ) {
        super(...drops);
        this.p = p;
    }

    draw = (p: p5) => {
        for (let i = 0; i < this.length; i++) {
            this[i].draw(p);
            this[i].top_y += this[i].speed;
            if (this[i].top_y >= p.height) {
                this[i].top_y = 0 - 2 * this[i].length * p.random();
                this[i].top_x = p.random() * p.width;
                this[i].length = Drop.setRandLength(p);
                this[i].thickness = Drop.setRandThickness(p);
                this[i].speed = Drop.setRandSpeed(p);
                this[i].wind = Drop.setRandWind(p);
                this[i].color = Drop.setRandColor(p);
            }
        }   
    }
}



