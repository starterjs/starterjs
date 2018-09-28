/**
* Essa classe é responsávl pela leitura de arquivos xml
* @class
*/
function ReaderXMLFile(path) {

    this.xml = null;

    if(path!=undefined){
        this.xml = se.loader.getAssets(path);
    }

    if(this.xml.getElementsByTagName("parsererror").length > 0 )
        throw new Error("O seu arquivo XML possui algum erro!");


}


ReaderXMLFile.prototype.getNode = function(tag, index){
    if(index == undefined)
        index = 0;

    return this.xml.getElementsByTagName(tag)[index].childNodes[0].nodeValue;
}

ReaderXMLFile.prototype.getCount = function(tag){
    return this.xml.getElementsByTagName(tag).length;
}

