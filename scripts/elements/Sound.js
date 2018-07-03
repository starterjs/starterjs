/**
 * Representa um objeto do tipo som, permite o controle do som (play, pause, stop e outros) attravés
 * da api howler.
 * @param {string} audio - caminho do arquivo de áudio
 * @constructor
 */
Sound = function (audio) {
    this.audio = se.loader.getAssets(audio);
};

/**
 * Toca o som
 * @method
 */
Sound.prototype.play = function () {
    this.audio.play();
};

/**
 * Toca o som em loop
 * @method
 */
Sound.prototype.playInLoop = function () {
    this.audio.loop();
};

/**
 * Pausa o som
 * @method
 */
Sound.prototype.pause = function () {
    this.audio.pause();
};

/**
 * Para o som
 * @method
 */
Sound.prototype.stop = function () {
    this.audio.stop();
};

/**
 * Configura volume
 * @param {float} volume
 * @method
 */
Sound.prototype.setVolume = function (volume) {
    this.audio.volume(volume);
};

/**
 * Verifica se o som esta tocando
 * @return {float} true se o som estiver tocando
 * @method
 */
Sound.prototype.isPlaying  = function () {
    return this.audio.isPlaying();
};

/**
 * Configura função para ser chamada quando o som terminar
 * @param {function} fn
 * @method
 */
Audio.prototype.setOnEnd  = function (fn) {
    this.on("end", fn);
};

