const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("button", "car.png", "image");
};


//Quando o loading acabar
se.gameReady = function() {

    var menu = new Scene();
    menu.setFunctionStart(setTeste);

    this.mlevel.addScene(menu)

}


function setTeste(){

    button = new Button("button", 250,100);
    button.setClick(function () {
        alert("Clicado!");
    });

};
