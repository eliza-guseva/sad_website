
import { Drop, BrightDrop } from "./drop";
import { Rain } from "./rain";

function createBrightDrops(p: p5) {
    let bright_drop_count = 300;
    let bright_drops: Array<BrightDrop> = [];
    for (let i = 0; i < bright_drop_count; i++) {
        let color_gauss = p.randomGaussian(10, 5);
        bright_drops.push(
            new BrightDrop(
                Math.random() * window.innerWidth, // x
                Math.random() * window.innerHeight, // y
                Math.max(30, p.randomGaussian(30, 50)), // length
                Math.max(1, p.randomGaussian(2, 1)), // width
                50, // speed
                0, // wind
                [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 45 + p.randomGaussian(5, 1)]
                ));
    }
    return bright_drops;
}


function createBckDrops(p: p5) {
    let bck_drop_count = 200;
    let bck_drops: Array<Drop> = [];
    for (let i = 0; i < bck_drop_count; i++) {
        let color_gauss = p.randomGaussian(10, 5);
        bck_drops.push(
            new Drop(
                Math.random() * window.innerWidth, // x
                Math.random() * window.innerHeight, // y
                Math.max(300,p.randomGaussian(100, 50)), // length
                Math.max(1, p.randomGaussian(40, 10)), // width
                100, // speed
                0, // wind
                [120 + color_gauss, 120 + color_gauss, 120 + color_gauss, 2 + p.randomGaussian(2, 1)]
                ));
    }
    return bck_drops;
}


let background_color = [7, 5, 28];




var sketch = (p: p5) => {
    let textbox_x = p.windowWidth/2 - 250;
    let textbox_y = p.windowHeight/2 - 300;
    let textbox_width = 500;
    let textbox_height = 600;
    // screen width not using p
    console.log(p.windowWidth, p.windowHeight);
    console.log(textbox_x, textbox_y, textbox_width, textbox_height);
    let bright_drops = createBrightDrops(p);
    let bck_drops = createBckDrops(p);

    let rain = new Rain(bright_drops, true, textbox_x, textbox_y, textbox_width);
    let bck_raind = new Rain(bck_drops);
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(background_color);
        p.frameRate(5)
    };
    p.draw = () => {
        p.background(background_color);
        bck_raind.draw(p);
        rain.draw(p);
        p.fill(75, 90, 125, 255);
        
        //p.rect(textbox_x, textbox_y, textbox_width, textbox_height);
    };
};
new p5(sketch);
//# sourceMappingURL=bad_rain.js.map