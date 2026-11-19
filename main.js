const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

let engine;
let world;
let canvas;

let gulosumos = {};
let gulosumosImg;
let gulosumosFrames = [];
let gulosumosCurrentFrame = 0;
let gulosumosFrameDelay = 10;

let candyBucket = [];
let candyBucketImg;
let candyBucketFrames = [];
let candyBucketCurrentFrame = 0;
let candyBucketFrameDelay = 10;

function preload() {
    gulosumosImg = loadImage("images/gulosumos.png");
    gulosumosFrames.push(loadImage("images/gulosumos.png"));
    gulosumosFrames.push(loadImage("images/gulosumos-eating.png"));

    candyBucketImg = loadImage("images/halloween-candy-bucket.png");
    candyBucketFrames.push(loadImage("images/halloween-candy-bucket.png"));
    candyBucketFrames.push(loadImage("images/halloween-candy-bucket-open.png"));
}

function setup() {
    canvas = createCanvas(620, 680);

    noSmooth();
    drawingContext.imageSmoothingEnabled = false;

    engine = Engine.create();
    world = engine.world;
}

function draw() {
    background(255, 0, 0);

    Engine.update(engine);

    push();
    translate(410,550);
    rotate(-HALF_PI);
    image(gulosumosImg, -10,-50, 160,160);
    pop();

    push();
    translate(130,500);
    rotate(-HALF_PI * 2);
    image(candyBucketImg, -80,-80, 100,100);
    pop();

    drawCandyBucket();
    drawGulosumos();
    
}

function drawGulosumos() {
    translate(410,550);
    rotate(-HALF_PI);

    gulosumos = {x:-10, y:-50, size:160};

    if(frameCount % gulosumosFrameDelay === 0) {
        gulosumosCurrentFrame++;

        if(gulosumosCurrentFrame >= gulosumosFrames.length) {
            gulosumosCurrentFrame = 0;
        }
    }

    image(gulosumosFrames[gulosumosCurrentFrame], gulosumos.x,gulosumos.y, gulosumos.size,gulosumos.size);
}

function drawCandyBucket() {
    translate(130,500);
    rotate(-HALF_PI * 2);

    candyBucket = {x:-80, y:-80, size:100};

    if(frameCount % candyBucketFrameDelay === 0) {
        candyBucketCurrentFrame++;

        if(candyBucketCurrentFrame >= candyBucketFrames.length) {
            candyBucketCurrentFrame = 0;
        }
    }

    image(candyBucketFrames[candyBucketCurrentFrame], candyBucket.x,candyBucket.y, candyBucket.size,candyBucket.size);
}