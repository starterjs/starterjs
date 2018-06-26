/**
 * Representa um level do jogo
 * @param {Array} objects - lista de objetos do level
 * @constructor
 */
function Levels(objects) {
    this.objects = [];

    if(objects != undefined)
        this.objects = objects;

    this.clean = true;

    se.mlevel.addLevel(this);

}

/**
 * Adiciona um objeto ao level
 * @param {GameObject} object - Objeto a ser adicionado no level
 */
Levels.prototype.addObjects = function(object){
    this.objects.push(object);
}

/**
 * Função inicial do level, deve ser sobreescrita pelo usuário
 */
Levels.prototype.startFunction = function () {};

/**
 * Imprime todos os elementos do level
 */
Levels.prototype.print = function () {

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
 * @param callback
 */
Levels.prototype.setFunctionStart = function(callback){
    this.startFunction  = callback;
};

/**
 * Configura os objetos do level
 * @param {Array} objects - lista de objetos do level
 */
Levels.prototype.setObjects = function (objects) {
    this.objects = objects;
}

/**
 * todo precisa documentar
 */
Levels.prototype.getObjects = function () {
    return this.objects;
}