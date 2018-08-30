/**
 * Representa um level do jogo
 * @param {Array} objects - lista de objetos do level
 * @constructor
 */
function Scene(objects, isactive) {
    this.objects = [];

    if(objects != undefined)
        this.objects = objects;

    this.clean = true;
    this.isActive = true;

   if(typeof isactive === "boolean")
        this.isActive = isactive;

    se.mlevel.addScene(this);

}

/**
 * Adiciona um objeto ao level
 * @method
 * @param {GameObject} object - Objeto a ser adicionado no level
 */
Scene.prototype.addObjects = function(object){
    this.objects.push(object);
}

/**
 * Função inicial do level, deve ser sobreescrita pelo usuário
 * @method
 */
Scene.prototype.startFunction = function () {};

/**
 * Imprime todos os elementos do level
 * @method
 */
Scene.prototype.print = function () {
    //Se a cena não estiver ativa
    if(this.isActive == false)
        return;

    //sort by z-index
    this.objects.sort(function(a,b){
        return a.z- b.z;
    });

    for(var i=0; i< this.objects.length; i++) {
        //chama update de cada objeto
        this.objects[i].update();
        //objetos pode ser removidos no update
        if(this.objects[i] == undefined)
            continue;

        this.objects[i].print(ctx);
    }
}

/**
 * Configura a função inicial do level
 * @method
 * @param callback
 */
Scene.prototype.setFunctionStart = function(callback){
    this.startFunction  = callback;
};

/**
 * Configura os objetos do level
 * @method
 * @param {Array} objects - lista de objetos do level
 */
Scene.prototype.setObjects = function (objects) {
    this.objects = objects;
}

/**
 * Pega todos os objetos do level
 * @method
 */
Scene.prototype.getObjects = function () {
    return this.objects;
}

/**
 * Configura o estado da cena
 * @param isActive
 */
Scene.prototype.setActive = function (isActive) {
    this.isActive = isActive;
}