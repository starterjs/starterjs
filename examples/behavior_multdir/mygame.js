const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/asfalto.png", "image");
    this.loader.addResource("player", "shooter.png", "image");
};


//Quando o loading acabar
se.gameReady = function() {

    //Leve 2 (Menu)
    var menu = new Scene();
    menu.setFunctionStart(setMenu);

}


function setMenu(){
    anim1 = new Animation(["player"]);
    var bg = new  Background("background",0,0,canvas.height, canvas.width);
	var car = new MultDirections([anim1], 200,200, 100, 100);
}
