/**
  * Dropdown
  *
  * @description
  *
  * @param  config         An object of configuration settings:
  *
  *
  * @return new instance of AppendText
  */





// Config defaults and init
// ----------------------------------------------------------------------------

var Dropdown = function (config) {
  this.hook = config.hook || 'js-drop';
  this.menu = config.menu;
  // this.event = config.event || 'hover';
  this.pane = document.getElementById(this.menu);
  // console.log(this.pane);
}


Dropdown.prototype.init = function() {
  this.modifyHooks(this.hook, this.addListener.bind(this, this.event));
}





// Shared methods
// ----------------------------------------------------------------------------

// grab element
Dropdown.prototype.modifyHooks = function(hook, func) {
  var elem = document.getElementById(hook); 
  func(elem);
}

Dropdown.prototype.addListener = function(event, elem) {
  elem.addEventListener("mouseenter", function(e) {
    if (e.target.closest("#"+this.hook)) {
      this.toggleMenu(elem);
    }
    else if (e.target.closest("#"+this.menu)) { return; }
    else if (this.pane.classList.contains('js-dropdown-visible')) {
      this.toggleMenu(elem);
    } 
  }.bind(this), false);

  elem.addEventListener("mouseleave", function(e) {
    if (e.target.closest("#"+this.hook)) {
      this.toggleMenu(elem);
    }
    else if (e.target.closest("#"+this.menu)) { return; }
    else if (this.pane.classList.contains('js-dropdown-visible')) {
      this.toggleMenu(elem);
    } 
  }.bind(this), false);
}

// toggle menu pane visibility
Dropdown.prototype.toggleMenu = function(elem) {
  if (this.pane.classList.contains('js-dropdown-hidden')) {
    this.pane.classList.replace('js-dropdown-hidden', 'js-dropdown-visible');
  } else if (this.pane.classList.contains('js-dropdown-visible')) {
    this.pane.classList.replace('js-dropdown-visible', 'js-dropdown-hidden');
  } 
  return false;
}