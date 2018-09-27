/**
 * @class
 * @classdesc Essa classe é reponsável por controlar os Scene
 */
function ManagerScene() {
    /**
     * Nome do jogador
     * @public
     * @type {string}
     */
    this.nameplayer = "";
    /**
     * Indice do nivel atual do jogo
     * @public
     * @type {int}
     */
    this.currentScene =-1;
    /**
     * Array de Scene
     * @type {Array}
     */
    this.scenes = [];
    /**
     * Score (pontos) do jogador
     * @type {number}
     */
    this.score = 0;

    this.objectsMovimentMouse = [];

}

/**
 * Adiciona o Level no array de scenes
 * @method
 * @param {Scene} level - Uma isntância de um level
 */
ManagerScene.prototype.addScene =function (level) {
    this.scenes.push(level);
}

/**
 * Carrega um determinado level
 * @method
 * @param {int} index
 */
ManagerScene.prototype.loadScene =function (index) {
    this.currentScene = index;
    this.getCurrentScene().setObjects([]);
    this.getCurrentScene().startFunction();
}

/**
 * Carrega o próximo level, seguindo a ordem do array de scenes
 * @method
 */
ManagerScene.prototype.nextScene =function () {
    this.currentScene++;
    this.getCurrentScene().setObjects([]);
    this.getCurrentScene().startFunction();
}

/**
 * Carrega o level anterior, seguindo a ordem do array de scenes
 * @method
 */
ManagerScene.prototype.priorScene =function () {
    this.currentScene--;
    this.getCurrentScene().setObjects([]);
    this.getCurrentScene().startFunction();
}

/**
 * Obtém o level atual
 * @method
 * @returns {*}
 */
ManagerScene.prototype.getCurrentScene = function () {
    return this.scenes[this.currentScene];
}

/**
 * Limpa o canvas e chama a função print do level atual
 * @method
 */
ManagerScene.prototype.print = function () {
  if(this.scenes[this.currentScene].clean) {
      ctx.save()
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
  }
    this.scenes[this.currentScene].print(ctx);
}

/**
 * Obtém um level segundo o index
 * @method
 * @param index
 * @returns {Scene}
 */
ManagerScene.prototype.getScene = function (index) {
    return this.scenes[index];
}



/**
 * Obtém os objetos de um determinado level
 * @method
 * @param index
 * @returns {Array|*}
 */
ManagerScene.prototype.getObjectByScene = function (index) {
    return this.scenes[index].getObjects();
}

/**
 * todo precisa documentar
 */
ManagerScene.prototype.getObjectsCurrentScene = function () {
    if(this.currentScene != -1)
        return this.scenes[this.currentScene].getObjects();
    else
        return [];
}


/**
 * Remove um objeto no level em que ele foi criado
 * @method
 * @param object
 */
ManagerScene.prototype.removeObject = function (object) {
    this.getObjectByScene(object.linklevel).splice(this.getObjectByScene(object.linklevel).indexOf(object), 1);
}


/**
 * Adiciona um ponto ao score (ponto)
 * @method
 */
ManagerScene.prototype.addScore = function(scorename){
    objs = this.getObjectByScene(this.currentScene);
    for(var i=0; i< objs.length; i++){
        if(objs[i].name == scorename){
            objs[i].score++;
        }
    }
    //this.score++;
}


/**
 * Chamado quando ocorre o Game Over
 * @method
 */
ManagerScene.prototype.gameOver = function () {
    scores = se.storage.getItemJSON("score1");

    for(var i = 0; i< scores.length; i++){
        if(scores[i].score < this.score) {
            console.log("new score");
            scores[i].name = this.nameplayer;
            scores[i].score = this.score;
            se.storage.setItemJSON("score1",  scores);
            break;
        }
    };

    this.loadScene(0);
}

/**
 * Desativa todos dragdrops do level
 * @method
 */
ManagerScene.prototype.offDragdropFlag = function () {
    var elements = this.getObjectsCurrentScene();
    for(var i=0; i<elements.length; i++){
        if (elements[i].classename == "dragdrop")
            elements[i].dragdroped = false;
    }
}

/**
 *
 * @return {*}
 */
ManagerScene.prototype.getObjetcsMovimentMouse = function () {
    return this.objectsMovimentMouse;
};

/**
 *
 * @return {Array}
 */
ManagerScene.prototype.clearObjetcsMovimentMouse = function () {
    return this.objectsMovimentMouse;
};

/**
 *
 * @param element
 */
ManagerScene.prototype.addObjetcsMovimentMouse = function (element) {
    this.objectsMovimentMouse.add(element);
};


/**
 * Cria um novo inimigo com uma aceleração maior
 * @method
 * @param {float} aceleration
 */
ManagerScene.prototype.createNewEnemy = function (aceleration) {
    enemy = new Enemy("enemyred", Math.random()*500, -50, "enemy");
    enemy.aceleration = aceleration + 0.2;
    this.scenes[this.currentScene].objects.push(enemy);
}

/**
 * @method
 * Remove o inimigo do jogo, adiciona score e cria um novo inimigo
 * @param {GameObject }object
 */
ManagerScene.prototype.killEnemy = function (object) {
    this.addScore("score");
    this.removeObject(object);
    this.createNewEnemy(object.aceleration);
}

