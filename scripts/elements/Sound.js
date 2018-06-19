/**
 * todo: documentar essa classe
 * @constructor
 */
Sound = function (audio) {
    this.audio = se.loader.getAssets(audio);
};

Sound.prototype.play = function () {
    this.audio.play();
};

Sound.prototype.playInLoop = function () {
    this.audio.loop();
};


Sound.prototype.pause = function () {
    this.audio.pause();
};

Sound.prototype.stop = function () {
    this.audio.stop();
};

Sound.prototype.setVolume = function () {
    this.audio.volume(0.5);
};

Sound.prototype.isPlaying  = function () {
    return this.audio.isPlaying();
};

Audio.prototype.setOnEnd  = function (fn) {
    this.on("end", fn);
};

