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
    menu.setFunctionStart(setTeste);

    this.mlevel.addScene(menu)
 

}


function setTeste(){



}
