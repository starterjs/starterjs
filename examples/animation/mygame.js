const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("scratch", "scratch.png", "image");
    this.loader.addResource("scratch2", "scratch2.png", "image");
};


//Quando o loading acabar
se.gameReady = function() {

    var menu = new Scene();
    menu.setFunctionStart(setMenu);

    //menu.setActive(true);

}


function setMenu(){
    
	scratch = new Sprite( ["scratch", "scratch2"] , 100,200);
	scratch.sayForSeconds("Hello, this is Scratch?", 2);
    scratch.wait(2);
    scratch.sayForSeconds("Hum... ", 2);
    scratch.wait(2);
    scratch.sayForSeconds("Javascript  is love!", 2);

    scratch2 = new Sprite("scratch" ,500,200);

    scratch2.setMirror(true);

    scratch2.wait(2);
    scratch2.sayForSeconds("No! It is   StarterJs!", 2);
    scratch2.wait(2);
    scratch2.sayForSeconds("Here you co-de with     javascript!", 2);
}
