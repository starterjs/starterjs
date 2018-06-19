const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/asfalto.png", "image");
    this.loader.addResource("buttonplay", "car.png", "image");
};


//Quando o loading acabar
se.gameReady = function() {

    //Leve 2 (Menu)
    var menu = new Levels();
    menu.setFunctionStart(setMenu);

    this.mlevel.addLevel(menu)
 

}


function setMenu(){

    //*** MENU ***/
    var bg = new  Background("background",0,0,canvas.height, canvas.width);
    //var btn = new Button("buttonplay", 200, 200);
    //var dp = new DragDrop("buttonplay", 400, 300);

	/*btn.setClick(function(){
	    alert("ok");
    });*/


	var car = new Car("buttonplay", 200, 200);
	car.setDefaultControll();

    this.addObjects(bg);
    //this.addObjects(btn);
    this.addObjects(car);
    //this.addObjects(dp);

}
