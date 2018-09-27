/**
* Essa classe é responsávl pela leitura de arquivos textos
* @class
*/
function ReaderTextFile(path) {
    this.text = [];
    this.currentLine = 0;

    if(path!=undefined){
        this.text = se.loader.getAssets(path);
    }
}


/**
 * Ler a próxima linha do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.nextLine = function () {
    return this.text[this.currentLine++];
}

/**
 * Ler a linha atual do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.priorLine = function () {
    return this.text[--this.currentLine];
}

/**
 * Ler uma linha especifica do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.getLine = function (index) {
    if(index < this.text.length)
        return this.text[index];
}


