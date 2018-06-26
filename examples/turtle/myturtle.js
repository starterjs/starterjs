const se = new StarterEngine();
se.startTurtle();

function setTurtle(){

    t = new Turtle();
    //t.y = canvas.height;
    t.clean();
    t.changeColorTo(blue)
    t.penDown();
    for(var i=0; i< 24; i++){
        t.changeColorFor(100);
        t.left(15);
        t.clean();
        for(var j=0; j< 4; j++) {
            t.left(90);
            t.forward(100);
        }
    }



    //this.addObjects(t);



}
