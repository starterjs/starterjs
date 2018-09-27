const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/purple.png", "image");
    this.loader.addResource("shipblue", "playerShip2_blue.png", "image");
    this.loader.addResource("enemyred", "enemyRed1.png", "image");
    this.loader.addResource("lase1", "laserBlue01.png", "image");
    this.loader.addResource("lase2", "laserRed01.png", "image");
    this.loader.addResource("logogame", "logogame.png", "image");
    this.loader.addResource("play", "labelPlay.png", "image");
    this.loader.addResource("labelrank", "labelRanking.png", "image");
    this.loader.addResource("guiscore", "playerLife2_blue.png", "image");
    this.loader.addResource("laser", "laser.mp3", "audio");
};


//Quando o loading acabar
se.gameReady = function() {


    //Leve 2 (Menu)
    var menu = new Scene();
    menu.setFunctionStart(setMenu);

    //Level 1 (jogo)
    var jogo= new Scene();
    jogo.setFunctionStart(setLevel1);

    this.mlevel.addScene(menu);
    this.mlevel.addScene(jogo);

    //storage
    if(!se.storage.getItem("score1"))
        se.storage.setItemJSON("score1", [ {'name':'unload', 'score': 0}, {'name':'unload', 'score': 0}, {'name':'unload', 'score': 0} ]);

}

function setLevel1() {
    bg = new Background("background" ,0,0,canvas.height, canvas.width);

    player = new Player("shipblue", 300, 600,"player");
    enemy =  new Enemy("enemyred", 250, 0, "enemy");
    enemy2 = new Enemy("enemyred", 500, 0, "enemy");
    score = new Score("guiscore","guiscore",600,20);
}


function setMenu(){

    //*** MENU ***/
    var bg = new  Background("background");

    var logo = new GameObject("logogame",0,0,"gui");
    logo.setPosition(canvas.width/2 - logo.w/2, 20);

    var play = new GameObject("play",0,0,"gui");
    play.setPosition(canvas.width/2 - play.w/2, 350);

    play.update = function () {
        if(se.teclado.ESPACO){
            se.mlevel.nameplayer =  input_nameplayer.text;
            se.mlevel.loadScene(1);
        }
    }

    var ranking = new GameObject("labelrank" ,0,0,"gui");
    ranking.setPosition(canvas.width/2 - ranking.w/2, 530);

    var scores= se.storage.getItemJSON("score1");

    var topscore1 = new Text("01 - Player: " + scores[0].name + " - Score: " + scores[0].score, 350, 600);
    topscore1.toCenter();
    var topscore2 = new Text("02 - Player: " + scores[1].name + " - Score: " + scores[1].score, 350, 625);
    topscore2.toCenter();
    var topscore3 = new Text("03 - Player: " + scores[2].name + " - Score: " + scores[2].score, 350,650);
    topscore3.toCenter();

    var input_nameplayer = new InputText(200,310, "#FFF", 20);
    input_nameplayer.toStart();
    input_nameplayer.setMaxSize(300);
    input_nameplayer.setText(se.mlevel.nameplayer);

}
