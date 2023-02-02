/**
  * Lightbox
  *
  * @description
  * The quick brown fox jumps over the lazy dog.
  *
  * @param  config 
  *
  * @return quick brown fox jumps over the lazy dog
  */





// Config defaults and init
// ----------------------------------------------------------------------------

var Lightbox = function (config) {

}


Lightbox.prototype.init = function() {
    this.modifyHooks(this.hook, this.addListener.bind(this, this.event));
}





// Shared methods
// ----------------------------------------------------------------------------

Lightbox.prototype.addListener = function(event, elem) {
    elem.addEventListener(event, function() {
        this.addModifier(this.base, this.modifier);
    }.bind(this), false);
}