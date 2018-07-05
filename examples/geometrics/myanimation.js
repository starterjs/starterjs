const se = new StarterEngine();

se.gameReady = function() {
    l = new Scene();
    l.setFunctionStart(startLevel);
};


function startLevel(){
    rect1 = new Rect(20,20,100,100, "#000");
    rect1.update = function () {
        this.setRotate(this.getRotate() + 10)
    }

    circle = new Circle(200,200, 0, "#f00");
    circle.update = function () {
        this.radius+=1;
        if(this.radius > 300 )
            this.radius = 0;
    }

    triangle = new Triangle([400,400],[350,450], [350,350], "#0f0");
    triangle.update = function () {
        this.translate(10,0);
        if(this.p2[0] > canvas.width)
            this.translate(-canvas.width,0);
    }
}


