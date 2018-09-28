const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("text", "text.xml", "xml");

};


//Quando o loading acabar
se.gameReady = function() {

    var menu = new Scene();
    menu.setFunctionStart(setMenu);


}


function setMenu(){

    info = new ReaderXMLFile("text");

    for(i=0; i< info.getCount("title"); i++) {
        console.log(info.getNode("title", i) );
    }



}
