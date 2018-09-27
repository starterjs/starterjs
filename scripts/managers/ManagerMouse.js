/**
 * Essa classe é responsável pela entrada do mouse
 * @class
 */
function ManagerMouse() {
    this.start();
    this.x = 0;
    this.y = 0;
}

/**
 * Configura o estado inicial do mouse
 */
ManagerMouse.prototype.start = function () {
    var _this = this;

    canvas.addEventListener('click', function(event) {

        var x = event.pageX - canvas.offsetLeft,
            y = event.pageY - canvas.offsetTop;

        var objects = se.mlevel.getObjectsCurrentScene();

        for(var i = 0; i < objects.length; i++) {
            element = objects[i];

        if ((element.classename == "dragdrop") && (!element.dragdroped)){

            if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
                element.click();
                break;
            }

        } else if (element.classename == "button") {
            if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
                element.click();
                break;
            }

        }

            if(i == objects.length-1){
                se.mlevel.offDragdropFlag();
                console.log("off")
            }

        };

    }, false);


    canvas.addEventListener('mousemove', function(event) {

        _this.x = event.pageX - canvas.offsetLeft;
        _this.y = event.pageY - canvas.offsetTop;

        var objects = se.mlevel.getObjetcsMovimentMouse();

        for(var i = 0; i < objects.length; i++) {
            objects[i].moveMouse(_this.x, _this.y);

        }


        }, false);
}


/**
 * Obtém a posição x e y do mouse
 * @return {{x: *, y: *}} - posição x e y
 */
ManagerMouse.prototype.getMousePosition = function () {
    return {x: this.x, y:this.y}
}

/**
 * Obtém a posição x do mouse
 * @return {int}  x - posição x do mouse
 */
ManagerMouse.prototype.getMouseX = function () {
    return this.x;
}

/**
 * Obtém a posição y do mouse
 * @return {int}  y - posição y do mouse
 */
ManagerMouse.prototype.getMouseY = function () {
    return this.y;
}