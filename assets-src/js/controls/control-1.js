var utils = require('../utils');

var control1 = {

  init: function(el, data) {

 		this.test(el);

  },

  test: function(el) {
    console.log('loaded module control-1')
  }



};



module.exports = control1;
