/**
 * Essa classe é responsável pelo carregamento de arquivos
 * @class
 * @param {function} callback - função chamada após o corregamento
 */
function ManagerLoader(callback) {
    //list of assets
    this.folder = "assets/";
    this.starterfolder = "resource/";
    this.assetsList = [];
    this.assetsListLoaded = [];
    this.checkAssetsList =0;
    this.callback = callback;
}

/**
 * Adiciona resouce na lista de carregamento
 * @method
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 * @param {string} type - Tipo do resorce (imagem, som)
 */
ManagerLoader.prototype.addResource = function (name, resource, type) {
    this.assetsList.push([name, resource, type,"user"]);
}

/**
 * Adiciona os resources nativos do starter
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 * @param {string} type - Tipo do resorce (imagem, som)
 */
ManagerLoader.prototype.addStarterResource = function (name, resource, type) {
    this.assetsList.push([name, resource, type,"starter"]);
}


/**
 * Adiciona um arquivo de imagem na lista de carregamento
 * @method
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 */
ManagerLoader.prototype.addImage = function (name, resource) {
    this.assetsList.push([name, resource, "image","user"]);
}



/**
 * Adiciona um arquivo de audio na lista de carregamento
 * @method
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 */
ManagerLoader.prototype.addAudio = function (name, resource) {
    this.assetsList.push([name, resource, "audio","user"]);
}



/**
 * Carrega todos os recourses
 * @method
 */
ManagerLoader.prototype.loading = function( ){

    if(this.assetsList.length == 0 ) {
        this.print(0.99);
        setTimeout(this.callback, 2000);
        return;
    }


    for(var i = 0; i < this.assetsList.length; i++){

        //se for do tipo imagem
		if(this.assetsList[i][2] == "image"){

            this.assetsListLoaded.push(new Image());
            var img = this.assetsListLoaded[this.assetsListLoaded.length-1];

            img.onload = function(){
                //incrementa o contado
                this.checkAssetsList++;
                //se o contatdo for igual ao tamanho dos assets a serem carregados
                if(this.checkAssetsList == this.assetsList.length ){
                    this.print();
                    setTimeout(this.callback, 2000);
                }else{
                    this.print();
                }
            }.bind(this);

            //call src of assets
            if(this.assetsList[i][3] == "user")
                img.src = this.folder+this.assetsList[i][1];
            else
                img.src = this.starterfolder+this.assetsList[i][1];

        //se for do tipo som
		} else if(this.assetsList[i][2] == "audio"){

		    var audio = null;

            var onload = function(){

                //incrementa o contado
                this.checkAssetsList++;
                //se o contatdo for igual ao tamanho dos assets a serem carregados
                if(this.checkAssetsList == this.assetsList.length ){
                    this.print();
                    setTimeout(this.callback, 2000);
                }else{
                    this.print();
                }
            }.bind(this);


            //call src of assets
            if(this.assetsList[i][3] == "user")
                audio = new Howl({ src: [this.folder+this.assetsList[i][1] ], onload: onload} );
            else
                audio = new Howl({ src: [this.starterfolder+this.assetsList[i][1]], onload: onload});

            this.assetsListLoaded.push(audio);
        }
    }




}

/**
 * Obtém um resource pelo nome
 * @param {string} name - nome do resouce
 * @returns {Object}
 */
ManagerLoader.prototype.getAssets = function(name){

    var returning = null;
    for(var i=0; i< this.assetsList.length; i++){
        if(this.assetsList[i][0] == name)
            returning = this.assetsListLoaded[i];
    }

    return returning;

}


/**
 * Imprime o carregamento na tela inicial
 * @method
 */
ManagerLoader.prototype.print = function(porcent){
    var porcentload = 0;

    if(porcent!=undefined)
        porcentload = porcent;
    else
        porcentload = ((this.checkAssetsList * 100)/this.assetsList.length)/100;

    if(porcentload==1)
        porcentload = 0.99;

    ctx.fillStyle="#008080ff";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.strokeStyle="#FFFFFF";
    ctx.beginPath();

    x = canvas.width/2 - 160;
    y = canvas.height/2 + 200

    ctx.moveTo(x,y);
    ctx.lineTo(x+300, y);
    ctx.quadraticCurveTo(x+310,y+15, x+300,y+30 );
    ctx.lineTo(x, y+30);
    ctx.quadraticCurveTo(x-10, y+15, x, y);
    ctx.stroke();

    x +=5;
    y +=5;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo( porcentload* x+290, y);
    ctx.lineTo(porcentload* x+290, y+20);
    //ctx.quadraticCurveTo(x+300,y+10, x+290,y+20 );
    ctx.lineTo(x, y+20);
    ctx.quadraticCurveTo(x-10, y+10, x, y);

    ctx.fillStyle="#FFFFFF";
    ctx.fill();

    img = document.getElementById("logohtml");
    ctx.drawImage(img,canvas.width/2 - 150, canvas.height/2 - 220, 300, 350);

    ctx.font="15px Verdana";
    text = parseInt(porcentload*100)+"%";
    ctx.textAlign="center";
    ctx.fillText("Loaded "+text, canvas.width/2 , canvas.height/2 + 250);

}

