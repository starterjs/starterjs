const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("scratch", "scratch.png", "image");
};


//Quando o loading acabar
se.gameReady = function() {

    var menu = new Scene();
    menu.setFunctionStart(setMenu);

}


function setMenu(){
    
	var scratch = new Sprite( ["scratch"] , 100,200);
	scratch.changeSizeFor("20%");
	scratch.sayForSeconds("Hello, this is Scratch?", 2);
    scratch.wait(3);
    scratch.sayForSeconds("Hum... ", 2);
    scratch.wait(2);
    scratch.sayForSeconds("Javascript  is love!", 2);

    var scratch2 = new Sprite( ["scratch"] ,500,200);
    scratch2.changeSizeFor("20%");
    scratch2.setMirror(true);

    scratch2.wait(2);
    scratch2.sayForSeconds("No! It is   StarterJs!", 2);
    scratch2.wait(2);
    scratch2.sayForSeconds("Here you co-de with     javascript!", 2);
}
