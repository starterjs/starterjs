/**
* Essa classe é responsávl pela leitura de arquivos csv
* @class
*/
function ReaderCSVFile(path) {
    this.csv = [];
    this.x = -1;
    this.y = -1;

    if(path!=undefined){
        this.csv = se.loader.getAssets(path);
    }
}


/**
 * Ler valor da planilha a direita
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.rightValeu = function () {

    if(this.x < this.csv[this.y==-1?0:this.y].length-1)
        return this.csv[this.y==-1?0:this.y][++this.x];
    return undefined;
}

/**
 * Ler valor da planilha a esquerda
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.leftValeu = function () {
    if(this.x > 0)
        return this.csv[this.y==-1?0:this.y][--this.x];
    return undefined;
}

/**
 * Ler valor da planilha a cima
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.topValeu = function () {
    if(this.y > 0)
        return this.csv[--this.y][this.x==-1?0:this.x];
    return undefined;
}

/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.bottomValeu = function () {

    if(this.y < this.csv.length-1)
        return this.csv[++this.y][this.x==-1?0:this.x];

    return undefined;
}


/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.currentValeu = function () {
    return this.csv[this.y==-1?0:this.y][this.x==-1?0:this.x];
}


/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.restartLine = function () {
    this.x = -1;
}


/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.getLengthLine = function () {
    return this.csv[this.y].legth;
}

/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.getLengthCol = function () {
    return this.csv.legth;
}


/**
 * Ler uma linha especifica do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderCSVFile.prototype.getValue = function (x, y) {
    this.x = x;
    this.y = y;
    if((this.y < this.csv.length) && (this.x < this.csv[this.y].length))
        return this.text[this.x][this.y];
}


