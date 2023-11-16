import { gauss } from "./utils";

export class Drop {
    top_x: number;
    top_y: number;
    length: number;
    thickness: number;
    speed: number;
    wind: number;
    color: number[];
    constructor(
        top_x: number, 
        top_y: number, 
        length: number, 
        thickness: number, 
        speed: number, 
        wind: number, 
        color: number[]
    ) {
            this.top_x = top_x;
            this.top_y = top_y;
            this.length = length;
            this.thickness = thickness;
            this.speed = Math.max(speed/2, speed * Math.pow(Math.random(), 1/3));
            this.wind = wind;
            this.color = color;
    }

    draw(p: p5) {
        p.stroke(this.color);
        p.strokeWeight(this.thickness);
        p.line(this.top_x, this.top_y, this.top_x, this.top_y + this.length);
        
    }

    static getRandDrop(p: p5) {
        return new Drop(
            this.setRandTopX(p), 
            this.setRandTopY(p), 
            this.setRandLength(p), 
            this.setRandThickness(p), 
            this.setRandSpeed(p), 
            this.setRandWind(p), 
            this.setRandColor(p)
        );
    }

    static setRandTopX(p: p5) {
        return p.random() * p.width;
    }

    static setRandTopY(p: p5) {
        return p.random() * p.height;
    }

    static setRandLength(p: p5) {
        return Math.max(90, gauss(100, 30));
    }
    static setRandThickness(p: p5) {
        return Math.max(1, gauss(1, 2));
    }

    static setRandSpeed(p: p5) {
        return Math.max(100, 10 + gauss(100, 50));
    }

    static setRandWind(p: p5) {
        return 0;
    }

    static setRandColor(p: p5) {
        let color_gauss = gauss(10, 5)
        return [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 65 + gauss(5,5)];
    }
}

// creat class BrightDrop extends Drop
class BrightDrop extends Drop {
    random: number;
    constructor(
        top_x: number, 
        top_y: number, 
        length: number, 
        thickness: number, 
        speed: number, 
        wind: number, 
        color: number[]
    ) {
        super(top_x, top_y, length, thickness, speed, wind, color);
        this.random = Math.random()**2;
    }

    draw(p: p5) {
        super.draw(p);
        // we are trying to create a glitter feeling below
        let bright_len = this.length * this.random;
        let wiggle_room = this.length - bright_len;
        let bright_init_y = this.top_y + this.length - bright_len - wiggle_room * this.random**2;
        p.strokeWeight(this.thickness / 2);
        p.stroke(this.color.map((x) => {return x + 30}))
        p.line(this.top_x, bright_init_y, this.top_x, bright_init_y + bright_len);
    }
}