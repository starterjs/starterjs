const se = new StarterEngine();

se.setResources = function () {
    //Add lista resource

    //erro: csv only work with other resource as this
    this.loader.addResource("table", "table.csv", "csv");

};


//Quando o loading acabar
se.gameReady = function() {



    var menu = new Scene();
    menu.setFunctionStart(setMenu);

}


function setMenu(){

   // bg = new Background("background",0,0,canvas.height, canvas.width);

    table = new ReaderCSVFile("table");

    y = table.bottomValeu();

    while(y != undefined) {

        x = table.rightValeu();
        y = table.rightValeu();
        cor = table.rightValeu();

        new Circle(parseInt(x), parseInt(y), 10, cor);

        //reiniciando a linha do 0
        table.restartLine();
        //pulando para nova linha
        y = table.bottomValeu();
    }
}




