/**
 * Essa classe é responsável pelo armazenamento do dados
 * @class
 */
ManagerStorage = function () {}

/**
 * Salva um item e seu valor
 * @param {string} itemname - nome do item a ser salvo
 * @param {string} value - valor do item
 */
ManagerStorage.prototype.setItem = function(itemname, value){
    localStorage.setItem(itemname, value);
};
/**
 * Obtém o valor de um item
 * @param {string} itemname - nome do item a ser salvo
 * @return {string}
 */
ManagerStorage.prototype.getItem = function(itemname){
    return localStorage.getItem(itemname);
};


/**
 * Salva um item e seu valor
 * @param {string} itemname - nome do item a ser salvo
 * @param {JSON} value - valor do item em JSON
 */
ManagerStorage.prototype.setItemJSON = function(itemname, value){
        localStorage.setItem(itemname, JSON.stringify(value));
};

/**
 * Obtém o valor de um item mem JSON
 * @param {string} itemname - nome do item a ser salvo
 * @return {JSON}
 */
ManagerStorage.prototype.getItemJSON = function(itemname, value){
        return JSON.parse(localStorage.getItem(itemname));
};

