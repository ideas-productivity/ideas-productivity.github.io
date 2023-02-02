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

var StickyMenu = function (config) {
  this.hook = config.hook || 'js-sticky';
}


StickyMenu.prototype.init = function() {
  window.addEventListener('scroll',
    this.throttle(this.toggle.bind(this), 30)
  );
}





// Shared methods
// ----------------------------------------------------------------------------

// basic throttling used so there's not a mess of resize calls
StickyMenu.prototype.throttle = function (callback, limit) { 
  var tick = false;
  return function () {
    if (!tick) {
      callback.call(this);
      tick = true;
      setTimeout(function () {
        tick = false;
      }, limit);
    }
  }
}

// add/remove class based on scroll position
StickyMenu.prototype.toggle = function () { 
  let scrolled = window.pageYOffset >= 450 ? true : false;
  let sticky = document.getElementsByClassName(this.hook);
  if (scrolled) {
    sticky[0].classList.add("js-sticky--visible");
  } else {
    sticky[0].classList.remove("js-sticky--visible");
  }
}



