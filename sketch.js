var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1m,c2m,c3m,c4m;
var grndm,trkm;

function preload(){
  c1m = loadImage("images/car1.png");
  c2m = loadImage("images/car2.png");
  c3m = loadImage("images/car3.png");
  c4m = loadImage("images/car4.png");

  grndm = loadImage("images/ground.png");
  trkm = loadImage("images/track.jpg");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
