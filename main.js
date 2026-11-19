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
let currentFrame = 0;
let frameDelay = 10;

let candyBucket = [];
let candyBucketImg;
let candyBucketFrames = [];

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
    image(gulosumosImg, 400,500, 160,160);
    pop();
    image(candyBucketImg, 100,500, 100,100);
    //drawGulosumos();
    //drawCandyBucket();
}

function drawGulosumos() {
    gulosumos = {x:400, y:500, size:160};

    if(frameCount % frameDelay === 0) {
        currentFrame++;

        if(currentFrame >= gulosumosFrames.length) {
            currentFrame = 0;
        }
    }

    image(gulosumosFrames[currentFrame], gulosumos.x,gulosumos.y, gulosumos.size,gulosumos.size);
}

function drawCandyBucket() {
    candyBucket = {x:100, y:500, size:100};

    if(frameCount % frameDelay === 0) {
        currentFrame++;

        if(currentFrame >= candyBucketFrames.length) {
            currentFrame = 0;
        }
    }

    image(candyBucketFrames[currentFrame], candyBucket.x,candyBucket.y, candyBucket.size,candyBucket.size);
}