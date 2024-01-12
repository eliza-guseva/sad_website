export class Drop {
    top_x: number;
    top_y: number;
    length: number;
    thickness: number;
    speed: number;
    wind: number;
    color: number[];

    // background drop, doesn't have a highlight
    constructor(
        top_x: number, top_y: number, length: number, 
        thickness: number, speed: number, wind: number, 
        color: number[]) {
        this.top_x = top_x;
        this.top_y = top_y;
        this.length = length;
        this.thickness = thickness;
        this.speed = Math.max(speed / 2, speed * Math.pow(Math.random(), 1 / 3));
        this.wind = wind;
        this.color = color;
    }
    draw(p: p5) {
        p.stroke(this.color);
        p.strokeWeight(this.thickness);
        p.line(this.top_x, this.top_y, this.top_x, this.top_y + this.length);
    }
}


export class BrightDrop extends Drop {
    random: number;
    // foreground drop, has a highlight
    constructor(top_x: number, top_y: number, length: number, 
        thickness: number, speed: number, wind: number, 
        color: number[]) {
        super(top_x, top_y, length, thickness, speed, wind, color);
        this.random = Math.pow(Math.random(), 2);
    }
    draw(p: p5) {
        super.draw(p);
        let bright_len = this.length * this.random;
        let wiggle_room = this.length - bright_len;
        let bright_init_y = this.top_y + this.length - bright_len - wiggle_room * Math.pow(this.random, 2);
        p.strokeWeight(this.thickness / 2);
        p.stroke(this.color.map((x) => { return x + 30; }));
        p.line(this.top_x, bright_init_y, this.top_x, bright_init_y + bright_len);
    }
}


export class ReflectedDrop extends Drop{
    wind_dir: number;
    countdown: number;
    // flies back
    constructor(
        top_x: number, top_y: number, length: number, 
        thickness: number, 
        color: number[]) {
        super(top_x, top_y, length, thickness, 0, 0, color);
        this.wind = Math.tan(Math.random() * Math.PI / 4) * this.length;
        this.wind_dir = Math.random() > 0.5 ? 1 : -1;
        this.color = color;
        this.countdown = 5;
    }
    draw(p: p5) {
        if (this.countdown > 0) {
            p.stroke(this.color);
            p.strokeWeight(this.thickness);
            p.line(this.top_x, this.top_y, this.top_x + this.wind * this.wind_dir, this.top_y - this.length);
            this.countdown -= 1;
        }
    }
}

