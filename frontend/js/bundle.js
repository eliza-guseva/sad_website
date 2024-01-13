(()=>{"use strict";var t={724:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.ReflectedDrop=i.BrightDrop=i.Drop=void 0;class o{constructor(t,i,o,s,e,h,n){this.top_x=t,this.top_y=i,this.length=o,this.thickness=s,this.speed=Math.max(e/2,e*Math.pow(Math.random(),1/3)),this.wind=h,this.color=n}draw(t){t.stroke(this.color),t.strokeWeight(this.thickness),t.line(this.top_x,this.top_y,this.top_x,this.top_y+this.length)}}i.Drop=o;class s extends o{constructor(t,i,o,s,e,h,n){super(t,i,o,s,e,h,n),this.random=Math.pow(Math.random(),2)}draw(t){super.draw(t);let i=this.length*this.random,o=this.length-i,s=this.top_y+this.length-i-o*Math.pow(this.random,2);t.strokeWeight(this.thickness/2),t.stroke(this.color.map((t=>t+30))),t.line(this.top_x,s,this.top_x,s+i)}}i.BrightDrop=s,i.ReflectedDrop=class extends s{constructor(t,i,o,s,e){super(t,i,o,s,0,0,e),this.wind=Math.tan(Math.random()*Math.PI/4)*this.length,this.wind_dir=Math.random()>.5?1:-1,this.color=e,this.countdown=2}draw(t){this.countdown>0&&(t.stroke(this.color),t.strokeWeight(this.thickness),t.line(this.top_x,this.top_y,this.top_x+this.wind*this.wind_dir,this.top_y-this.length),this.countdown-=1)}}},422:(t,i,o)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Rain=void 0;const s=o(724);i.Rain=class extends Array{constructor(t,i=!1,o=0,e=0,h=0){super(...t),this.draw=t=>{for(let i=0;i<this.length;i++){this[i].draw(t),this[i].top_y+=this[i].speed,this[i].top_y>=t.height&&(this[i].top_y=0-2*this[i].length*t.random(),this[i].top_x=t.random()*t.width);let o=this[i].top_y+this[i].length,e=o>=this.textbox_y&&o<=this.textbox_y+this[i].length,h=this[i].top_x>=this.textbox_x&&this[i].top_x<=this.textbox_x+this.textbox_width;this.is_reflected&&e&&h&&this.reflections.push(new s.ReflectedDrop(this[i].top_x,this.textbox_y,t.randomGaussian(20,5),2.5,this[i].color))}for(let i=0;i<this.reflections.length;i++)this.reflections[i].draw(t)},this.createDrops=t=>{for(let i=0;i<this.length;i++)this[i]=new s.Drop(t.random()*t.width,t.random()*t.height,200,2,4,0,[125,135,138,20])},this.textbox_x=o,this.textbox_y=e,this.textbox_width=h,this.is_reflected=i,this.reflections=[]}}}},i={};function o(s){var e=i[s];if(void 0!==e)return e.exports;var h=i[s]={exports:{}};return t[s](h,h.exports,o),h.exports}(()=>{const t=o(724),i=o(422);let s=[7,5,28];new p5((o=>{let[e,h,n,r]=function(t){if(t.windowWidth>t.windowHeight){let i=t.windowWidth/2,o=t.windowHeight/3*2;return[(t.windowWidth-i)/2,(t.windowHeight-o)/2,i,o]}{let i=3*t.windowWidth/4,o=t.windowHeight/3*2;return[(t.windowWidth-i)/2,(t.windowHeight-o)/2,i,o]}}(o);console.log(o.windowWidth,o.windowHeight),console.log(e,h,n,r);let a=function(i,o){let s=[];for(let o=0;o<100;o++){let o=i.randomGaussian(10,5);s.push(new t.BrightDrop(Math.random()*window.innerWidth,Math.random()*window.innerHeight,Math.max(30,i.randomGaussian(30,50)),Math.max(1,i.randomGaussian(2,1)),50,0,[120+o,120+o,120+o,45+i.randomGaussian(5,1)]))}return s}(o),d=function(i,o){let s=[];for(let o=0;o<100;o++){let o=i.randomGaussian(10,5);s.push(new t.Drop(Math.random()*window.innerWidth,Math.random()*window.innerHeight,Math.max(300,i.randomGaussian(100,50)),Math.max(1,i.randomGaussian(40,10)),30,0,[120+o,120+o,120+o,2+i.randomGaussian(2,1)]))}return s}(o),w=new i.Rain(a,!0,e,h,n),l=new i.Rain(d);o.setup=()=>{o.createCanvas(o.windowWidth,o.windowHeight),o.background(s),o.frameRate(50)},o.draw=()=>{o.background(s),l.draw(o),w.draw(o),o.fill(75,90,125,255),o.rect(e,h,n,r)}}))})()})();