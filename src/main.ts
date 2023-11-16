import { Drop } from "./drop";
import { Rain } from "./rain";


let background_color = [57, 65, 85]; //late evening
let drop_count = 500;

let drops: Array<Drop> = [];


var sketch = (p: p5) => {

    for (let i = 0; i < drop_count; i++) {
        drops.push(Drop.getRandDrop(p));
    }

    let rain = new Rain(
            p, 
            drops
        );


    p.setup = () => {
        console.log(rain)
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(background_color);
        //p.frameRate(30);
    }


    p.draw = () => {
        p.background(background_color);
        //bck_rain.draw(p);
        rain.draw(p);
        p.fill(95, 100, 115, 255);
        p.rect(p.width/2 - 500, p.height/2 - 300, 1000, 800);
    }
    }



new p5(sketch);