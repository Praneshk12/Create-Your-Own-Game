const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BG_Img;
function preload() {
    BG_Img = loadImage("pac-maze.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    superHero = new Superhero(50, 280, 20, 20);
    ground = new Ground(300,height,600,20);
    wall1 = new Ground(10,300,10,600);
    wall2 = new Ground(300,580,600,10);
    wall3 = new Ground(583,300,10,600);
    wall4 = new Ground(300,20,600,10);
    wall5 = new Ground(55, 70, 8, 35);
    wall6 = new Ground(80, 55, 55, 8 );
    wall7 = new Ground(110,70,8,35);
    wall8 = new Ground(83, 93, 55, 8)
    wall9 = new Ground(170, 70, 8, 35);
    wall10 = new Ground(200, 55, 55, 8);
    wall11 = new Ground(230,70,8,35);
    wall12 = new Ground(203, 93, 55, 8);
    wall13 = new Ground(370,70, 8, 35);
    wall14 = new Ground(400, 55, 55, 8);
    wall15 = new Ground(430,70,8,35);
    wall16 = new Ground(400, 93, 55, 8);
    wall17 = new Ground(487,70, 8, 35);
    wall18 = new Ground(517, 55, 55, 8);
    wall19 = new Ground(545,70,8,35);
    wall20 = new Ground(514, 93, 55, 8);
    wall21 = new Ground(55, 140, 8, 27);
    wall22 = new Ground(83, 128, 55, 8);
    wall23 = new Ground(112, 140, 8, 27);
    wall24 = new Ground(80, 154, 55, 8);
    wall25 = new Ground(490, 140, 8, 27);
    wall26 = new Ground(520, 128, 55, 8);
    wall27 = new Ground(542, 140, 8, 27);
    wall28 = new Ground(514, 154, 55, 8);
    wall29 = new Ground(282, 53, 10, 85)
    wall30 = new Ground(318, 53, 10, 85)
    wall31 = new Ground(300, 93, 40, 5)
    wall32 = new Ground(300,115,120,8);
    wall33 = new Ground(362,125,8,22);
    wall34 = new Ground(340,139,50,8);
    wall35 = new Ground(262,139,50,8);
    wall36 = new Ground(236,125,8,22);
    wall37 = new Ground(285,161,8,85);
    wall38 = new Ground(315,161,8,85);
    wall39 = new Ground(300,205,22,7);
    wall40 = new Ground(161,205,8,120);
    wall41 = new Ground(181,205,8,120);
    wall42 = new Ground(170,140,20,8);
    wall43 = new Ground(170,265,20,8);
    wall44 = new Ground(217,190,60,8);
    wall45 = new Ground(219,219,63,8);
    wall46 = new Ground(250,205,8,23);
    wall47 = new Ground(350,205,8,23);
    wall48 = new Ground(390,190,70,8);
    wall49 = new Ground(390,220,70,8);
    wall50 = new Ground(440,200,8,130);
    wall51 = new Ground(415,200,8,130);
    wall52 = new Ground(427,140,19,8);
    wall53 = new Ground(430,265,22,8);
    wall56 = new Ground(105,210,17,78);
    wall57 = new Ground(495,210,17,78);
    wall58 = new Ground(50,240,100,20);
    wall59 = new Ground(545,243,130,17);
    wall60 = new Ground(60,380,100,17);
    wall61 = new Ground(105,340,20,78);
    wall62 = new Ground(535,380,100,17);
    wall63 = new Ground(495,345,17,85);
    wall64 = new Ground(60,177,85,17);
    wall65 = new Ground(530,175,85,17);
    wall66 = new Ground(550,315,130,17);
    wall67 = new Ground(60,315,110,17);

    alien1 = new Alien(230, 240, 20, 20);
    alien2 = new Alien(370, 240, 20, 20)
    civilian1 = new Civilian(300, 300, 20, 20);
}

function draw(){
    background(BG_Img);
    Engine.update(engine);
    fill("yellow");
    text(mouseX+","+mouseY, 50, 50);
    

    superHero.display();
    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    wall31.display();
    wall32.display();
    wall33.display();
    wall34.display();
    wall35.display();
    wall36.display();
    wall37.display();
    wall38.display();
    wall39.display();
    wall40.display();
    wall41.display();
    wall42.display();
    wall43.display();
    wall44.display();
    wall45.display();
    wall46.display();
    wall47.display();
    wall48.display();
    wall49.display();
    wall50.display();
    wall51.display();
    wall52.display();
    wall53.display();
    wall56.display();
    wall57.display();
    wall58.display();
    wall59.display();
    wall60.display();
    wall61.display();
    wall62.display();
    wall63.display();
    wall64.display();
    wall65.display();
    wall66.display();
    wall67.display();

    alien1.display();
    alien2.display();
    civilian1.display();

    
}
function keyPressed(){
    if(keyCode === 39){
        superHero.x = superHero.x + 5;
    }
    if(keyCode === 37){
        superHero.x = superHero.x - 5;

    }
    if(keyCode === 40){
        superHero.y = superHero.y + 5;

    }
    if(keyCode === 38){
        superHero.y = superHero.y - 5;

    }
}

