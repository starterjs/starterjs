const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/asfalto.png", "image");
    this.loader.addResource("car", "car.png", "image");
};


//Quando o loading acabar
se.gameReady = function() {

    //Leve 2 (Menu)
    var menu = new Scene();
    menu.setFunctionStart(setMenu);
	
}


function setMenu(){

    var bg = new  Background("background",0,0,canvas.height, canvas.width);
	var car = new Car("car", 200, 200);
}
