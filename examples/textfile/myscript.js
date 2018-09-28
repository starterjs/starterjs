const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource

    this.loader.addResource("text", "text.txt", "text");
    this.loader.addResource("text2", "text2.txt", "text");

};


//Quando o loading acabar
se.gameReady = function() {

    var menu = new Scene();
    menu.setFunctionStart(setMenu);

    //menu.setActive(true);

}


function setMenu(){

    talk1 = new ReaderTextFile("text");
    talk2 = new ReaderTextFile("text2");

    scratch = new Sprite( "scratch" , 100,200);
    scratch.sayForSeconds(talk1.nextLine(), 2);
    scratch.wait(2);
    scratch.sayForSeconds(talk1.nextLine(), 2);
    scratch.wait(2);
    scratch.sayForSeconds(talk1.nextLine(), 2);

    scratch2 = new Sprite("scratch",500,200);

    scratch2.setMirror(true);

    scratch2.wait(2);
    scratch2.sayForSeconds(talk2.nextLine(), 2);
    scratch2.wait(2);
    scratch2.sayForSeconds(talk2.nextLine(), 2);


}
