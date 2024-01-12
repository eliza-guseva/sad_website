import { Drop, ReflectedDrop } from './drop';


export class Rain extends Array<Drop> {
    drops: Array<Drop>;
    is_reflected: Boolean; // if the drops are reflected
    reflections: Array<ReflectedDrop>; // collection of reflected drops
    textbox_x: number; // x of textbox
    textbox_y: number; // y of textbox
    textbox_width: number; // width of textbox
    // collection of drops
    constructor(drops: Array<Drop>, is_reflected = false, textbox_x = 0, textbox_y = 0, textbox_width = 0) {
        super(...drops);
        this.textbox_x = textbox_x;
        this.textbox_y = textbox_y;
        this.is_reflected = is_reflected;
        this.reflections = [];
    }

    draw = (p: p5) => {
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
                this.reflections.push(
                    new ReflectedDrop(
                        this[i].top_x, // x
                        this.textbox_y, // y
                        p.randomGaussian(35,5), // length
                        3.5, // width
                        this[i].color));
            }
        }
        for (let i = 0; i < this.reflections.length; i++) {
            this.reflections[i].draw(p);
        }
    };
    createDrops = (p: p5) => {
        for (let i = 0; i < this.length; i++) {
            this[i] = new Drop(p.random() * p.width, p.random() * p.height, 200, 2, 4, 0, [125, 135, 138, 20]);
        }
    };
        
}


