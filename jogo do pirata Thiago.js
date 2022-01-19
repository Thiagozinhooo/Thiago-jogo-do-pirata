const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var fundo;
var tower;
var solo;
var mundo;
var tela;
var motor;

function preload(){


}

function setup(){
  tela=createCanvas(1200,600);

  motor=Engine.create();

  mundo=motor.mundo;

  var Options = {
    isStatic:true
  }
  solo = Bodies.rectangle(0,height-1,width*2,1,Options);

  World.add(mundo,solo);
















}
 
function draw(){
  background("white");
  
  Engine.update(motor);

  rect(solo.position.x,solo.position.y,width*2,1);
}
