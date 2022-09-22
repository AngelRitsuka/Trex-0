//variaveis
var dinossauro;
var dinoImagem;


//carregar imagens, sons,animações, e outras coisas
function preload(){
  dinoImagem = loadAnimation("trex1.png",
  "trex3.png","trex4.png");

}

//configurações
function setup(){
  //criando a tela
  createCanvas(600,200)
  
  dinossauro = createSprite(50,150);
  dinossauro.addAnimation("correndo",dinoImagem);
 
}

//o que acontece na tela?
function draw(){
  background("pink");
  
  //não pode faltar
  drawSprites();

}
