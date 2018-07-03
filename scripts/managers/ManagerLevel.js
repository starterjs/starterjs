/**
 * @class
 * @classdesc Essa classe é reponsável por controlar os Levels
 */
function ManagerLevel() {
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
    this.currentLevel =-1;
    /**
     * Array de Levels
     * @type {Array}
     */
    this.levels = [];
    /**
     * Score (pontos) do jogador
     * @type {number}
     */
    this.score = 0;


}

/**
 * Adiciona o Level no array de levels
 * @method
 * @param {Levels} level - Uma isntância de um level
 */
ManagerLevel.prototype.addLevel =function (level) {
    this.levels.push(level);
}

/**
 * Carrega um determinado level
 * @method
 * @param {int} index
 */
ManagerLevel.prototype.loadLevel =function (index) {
    this.currentLevel = index;
    this.getCurrentLevel().setObjects([]);
    this.getCurrentLevel().startFunction();
}

/**
 * Carrega o próximo level, seguindo a ordem do array de levels
 * @method
 */
ManagerLevel.prototype.nextLevel =function () {
    this.currentLevel++;
    this.getCurrentLevel().setObjects([]);
    this.getCurrentLevel().startFunction();
}

/**
 * Carrega o level anterior, seguindo a ordem do array de levels
 * @method
 */
ManagerLevel.prototype.priorLevel =function () {
    this.currentLevel--;
    this.getCurrentLevel().setObjects([]);
    this.getCurrentLevel().startFunction();
}

/**
 * Obtém o level atual
 * @method
 * @returns {*}
 */
ManagerLevel.prototype.getCurrentLevel = function () {
    return this.levels[this.currentLevel];
}

/**
 * Limpa o canvas e chama a função print do level atual
 * @method
 */
ManagerLevel.prototype.print = function () {
  if(this.levels[this.currentLevel].clean) {
      ctx.save()
      ctx.setTransform(1,0,0,1,0,0)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore()
     //console.log("is cleaning")
  }
    this.levels[this.currentLevel].print(ctx);
}

/**
 * Obtém um level segundo o index
 * @method
 * @param index
 * @returns {Levels}
 */
ManagerLevel.prototype.getLevel = function (index) {
    return this.levels[index];
}



/**
 * Obtém os objetos de um determinado level
 * @method
 * @param index
 * @returns {Array|*}
 */
ManagerLevel.prototype.getObjectByLevel = function (index) {
    return this.levels[index].getObjects();
}

/**
 * todo precisa documentar
 */
ManagerLevel.prototype.getObjectsCurrentLevel = function () {
    if(this.currentLevel != -1)
        return this.levels[this.currentLevel].getObjects();
    else
        return [];
}


/**
 * Remove um objeto no level em que ele foi criado
 * @method
 * @param object
 */
ManagerLevel.prototype.removeObject = function (object) {
    this.getObjectByLevel(object.linklevel).splice(this.getObjectByLevel(object.linklevel).indexOf(object), 1);
}


/**
 * Adiciona um ponto ao score (ponto)
 * @method
 */
ManagerLevel.prototype.addScore = function(scorename){
    objs = this.getObjectByLevel(this.currentLevel);
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
ManagerLevel.prototype.gameOver = function () {
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

    this.loadLevel(0);
}

/**
 * Desativa todos dragdrops do level
 * @method
 */
ManagerLevel.prototype.offDragdropFlag = function () {
    var elements = this.getObjectsCurrentLevel();
    for(var i=0; i<elements.length; i++){
        if (elements[i].classename == "dragdrop")
            elements[i].dragdroped = false;
    }
}


/**
 * Cria um novo inimigo com uma aceleração maior
 * @method
 * @param {float} aceleration
 */
ManagerLevel.prototype.createNewEnemy = function (aceleration) {
    enemy = new Enemy("enemyred", Math.random()*500, -50, "enemy");
    enemy.aceleration = aceleration + 0.2;
    this.levels[this.currentLevel].objects.push(enemy);
}

/**
 * @method
 * Remove o inimigo do jogo, adiciona score e cria um novo inimigo
 * @param {GameObject }object
 */
ManagerLevel.prototype.killEnemy = function (object) {
    this.addScore("score");
    this.removeObject(object);
    this.createNewEnemy(object.aceleration);
}

