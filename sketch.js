
let song;
let hair1;
let hair2;
let hair3;
let hair4;
let hair5;

let top1;
let top2;
let top3;
let top4;
let top5;

let bottoms1;
let bottoms2;
let bottoms3;
let bottoms4;
let bottoms5;

let button1;
let button2;
let button3;
let button4;
let button5;

let button6;
let button7;
let button8;
let button9;
let button10;

let button11;
let button12;
let button13;
let button14;
let button15;



let main;

function preload(){
  
  song = loadSound("PRETTY GIRL CLAIRO (LYRICS).mp3");
  main = createImg("Untitled_Artwork 21.png","main");
  
  hair1 = createImg("Untitled_Artwork 16.png","blonde short");
  hair1.position(0,0);
  hair1.hide();
  hair2 = createImg("Untitled_Artwork 17.png","black ponytail");
  hair2.hide();
  hair2.position(0,0);
  hair3 = createImg("Untitled_Artwork 18.png","green updo");
  hair3.hide();
  hair3.position(0,0);
  hair4 = createImg("Untitled_Artwork 19.png","red bob");
  hair4.hide();
  hair4.position(0,0);
  hair5 = createImg("Untitled_Artwork 20.png","orange bun");
  hair5.hide();
  hair5.position(0,0);
    
  top1 = createImg("Untitled_Artwork 6.png","green crop");
  top1.hide();
  top1.position(0,0);
  top2 = createImg("Untitled_Artwork 7.png","white silk tank");
  top2.hide();
  top2.position(0,0);
  top3 = createImg("Untitled_Artwork 8.png","pink ruffle");
  top3.hide();
  top3.position(0,0);
  top4 = createImg("Untitled_Artwork 9.png","brown halter");
  top4.hide();
  top4.position(0,0);
  top5 = createImg("Untitled_Artwork 10.png","black turtleneck");
  top5.hide();
  top5.position(0,0);
  
  bottoms1 = createImg("Untitled_Artwork 11.png","mom jeans");
  bottoms1.hide();
  bottoms1.position(0,0);
  bottoms2 = createImg("Untitled_Artwork 12.png","orange silk skirt");
  bottoms2.hide();
  bottoms2.position(0,0);
  bottoms3 = createImg("Untitled_Artwork 13.png","overalls");
  bottoms3.hide();
  bottoms3.position(0,0);
  bottoms4 = createImg("Untitled_Artwork 14.png","sailor shorts");
  bottoms4.hide();
  bottoms4.position(0,0);
  bottoms5 = createImg("Untitled_Artwork 15.png","white ripped shorts");
  bottoms5.hide();
  bottoms5.position(0,0);
  
  
  
  button1= createImg("Untitled_Artwork 22.png","main");
  button1.position(0,0);
  button2= createImg("Untitled_Artwork 23.png","main");
  button2.position(0,0);
  button3= createImg("Untitled_Artwork 24.png","main");
  button3.position(0,0);
  button4= createImg("Untitled_Artwork 25.png","main");
  button4.position(0,0);
  button5= createImg("Untitled_Artwork 26.png","main");
  button5.position(0,0);
  
  button6= createImg("Untitled_Artwork 27.png","main");
  button6.position(0,0);
  button7= createImg("Untitled_Artwork 28.png","main");
  button7.position(0,0);
  button8= createImg("Untitled_Artwork 29.png","main");
  button8.position(0,0);
  button9= createImg("Untitled_Artwork 30.png","main");
  button9.position(0,0);
  button10= createImg("Untitled_Artwork 31.png","main");
  button10.position(0,0);
    
  button11= createImg("Untitled_Artwork 32.png","main");
  button11.position(0,0);
  button12= createImg("Untitled_Artwork 33.png","main");
  button12.position(0,0);
  button13= createImg("Untitled_Artwork 34.png","main");
  button13.position(0,0);
  button14= createImg("Untitled_Artwork 35.png","main");
  button14.position(0,0);
  button15= createImg("Untitled_Artwork 36.png","main");
  button15.position(0,0); 
  
  button = createButton(".");
  button.position(505,330);
  button.mousePressed(pickOutfit);
  button.style('height','80px');
  button.style('width','80px');
  button.style('background','url("Untitled_Artwork 22.png") no-repeat');
  
  button1 = createButton(".");
  button1.position(623,327);
  button1.mousePressed(pickOutfit2);
  button1.style('height','85px');
  button1.style('width','85px');
  button1.style('background','url("Untitled_Artwork 23.png") no-repeat');
  
  button2 = createButton(".");
  button2.position(743,330);
  button2.mousePressed(pickOutfit3);
  button2.style('height','80px');
  button2.style('width','80px');
  button2.style('background','url("Untitled_Artwork 24.png") no-repeat');
    
  button3 = createButton(".");
  button3.position(850,333);
  button3.mousePressed(pickOutfit4);
  button3.style('height','80px');
  button3.style('width','80px');
  button3.style('background','url("Untitled_Artwork 25.png") no-repeat');
  
  button4 = createButton(".");
  button4.position(950,330);
  button4.mousePressed(pickOutfit5);
  button4.style('height','80px');
  button4.style('width','80px');
  button4.style('background','url("Untitled_Artwork 26.png") no-repeat');
  
  button5 = createButton(".");
  button5.position(500,575);
  button5.mousePressed(pickOutfit6);
  button5.style('height','85px');
  button5.style('width','85px');
  button5.style('background','url("Untitled_Artwork 27.png") no-repeat');
  
  button6 = createButton(".");
  button6.position(620,575);
  button6.mousePressed(pickOutfit7);
  button6.style('height','85px');
  button6.style('width','85px');
  button6.style('background','url("Untitled_Artwork 28.png") no-repeat');
  
  button7 = createButton(".");
  button7.position(740,570);
  button7.mousePressed(pickOutfit8);
  button7.style('height','85px');
  button7.style('width','85px');
  button7.style('background','url("Untitled_Artwork 29.png") no-repeat');

  button8 = createButton(".");
  button8.position(850,577);
  button8.mousePressed(pickOutfit9);
  button8.style('height','80px');
  button8.style('width','80px');
  button8.style('background','url("Untitled_Artwork 30.png") no-repeat');
 
  button9 = createButton(".");
  button9.position(955,575);
  button9.mousePressed(pickOutfit10);
  button9.style('height','80px');
  button9.style('width','80px');
  button9.style('background','url("Untitled_Artwork 31.png") no-repeat');
  
  button10 = createButton(".");
  button10.position(496,825);
  button10.mousePressed(pickOutfit11);
  button10.style('height','80px');
  button10.style('width','80px');
  button10.style('background','url("Untitled_Artwork 32.png") no-repeat');
  
  button11 = createButton(".");
  button11.position(605,815);
  button11.mousePressed(pickOutfit12);
  button11.style('height','80px');
  button11.style('width','80px');
  button11.style('background','url("Untitled_Artwork 33.png") no-repeat');
  
  button12 = createButton(".");
  button12.position(730,810);
  button12.mousePressed(pickOutfit13);
  button12.style('height','85px');
  button12.style('width','85px');
  button12.style('background','url("Untitled_Artwork 34.png") no-repeat');
  
  button13 = createButton(".");
  button13.position(850,815);
  button13.mousePressed(pickOutfit14);
  button13.style('height','85px');
  button13.style('width','85px');
  button13.style('background','url("Untitled_Artwork 35.png") no-repeat');
  
  button14 = createButton(".");
  button14.position(957,815);
  button14.mousePressed(pickOutfit15);
  button14.style('height','80px');
  button14.style('width','80px');
  button14.style('background','url("Untitled_Artwork 36.png") no-repeat');
  
}

function setup() {
  //noCanvas();
  createCanvas(1000,1000);
  background(0);
  //button1.position(0,0);
  song.play();
  song.loop();
  
  main.position(0,0);
  
 
}

function draw() {
  background(220);
  
  //print(mouseX, mouseY);
  
  /*fill(255);
  let square1 = square(520,345,50);
  let square2 = square(645,345,50);
  let square3 = square(760,345,50);
  let square4 = square(870,345,50);
  let square5 = square(965,345,50);
  
  let square6 = square(520,595,50);
  let square7 = square(635,595,50);
  let square8 = square(755,590,50);
  let square9 = square(870,595,50);
  let square10 = square(965,345,50);
  
  let square11 = square(515,845,50);
  let square12 = square(625,835,50);
  let square13 = square(750,835,50);
  let square14 = square(870,835,50);
  let square15 = square(965,835,50);*/
  
  
}

function pickOutfit9(){
    top1.show();
    top2.hide();
    top3.hide();
    top4.hide();
    top5.hide();
} 

function pickOutfit10(){
  top2.show();
  top1.hide();
  top3.hide();
  top4.hide();
  top5.hide();
}
function pickOutfit8(){
  top1.hide();
    top2.hide();
    top3.show();
    top4.hide();
    top5.hide();
}
function pickOutfit7(){
  top1.hide();
    top2.hide();
    top3.hide();
    top4.show();
    top5.hide();
}
function pickOutfit6(){
  top1.hide();
    top2.hide();
    top3.hide();
    top4.hide();
    top5.show();
}
function pickOutfit5(){
  hair1.show();
  hair2.hide();
  hair3.hide();
  hair4.hide();
  hair5.hide();
}
function pickOutfit4(){
  hair1.hide();
  hair2.show();
  hair3.hide();
  hair4.hide();
  hair5.hide();
}
function pickOutfit3(){
  hair1.hide();
  hair2.hide();
  hair3.show();
  hair4.hide();
  hair5.hide();
}
function pickOutfit2(){
  hair1.hide();
  hair2.hide();
  hair3.hide();
  hair4.show();
  hair5.hide();
}
function pickOutfit(){
  hair1.hide();
  hair2.hide();
  hair3.hide();
  hair4.hide();
  hair5.show();
}
function pickOutfit11(){
  bottoms1.show();
  bottoms2.hide();
  bottoms3.hide();
  bottoms4.hide();
  bottoms5.hide();
}
function pickOutfit12(){
  bottoms1.hide();
  bottoms2.show();
  bottoms3.hide();
  bottoms4.hide();
  bottoms5.hide();
}
function pickOutfit13(){
  bottoms1.hide();
  bottoms2.hide();
  bottoms3.show();
  bottoms4.hide();
  bottoms5.hide();
}
function pickOutfit14(){
  bottoms1.hide();
  bottoms2.hide();
  bottoms3.hide();
  bottoms4.show();
  bottoms5.hide();
}
function pickOutfit15(){
  bottoms1.hide();
  bottoms2.hide();
  bottoms3.hide();
  bottoms4.hide();
  bottoms5.show();
}






