cordova.define("com.kuldeep.datepickercordovaplugin.datepickercordovaplugin", function(require, exports, module) {
/**
 * @author Kuldeep Kumar
 * @summary js interface for the cordova plugin 
 */

var exec = require('cordova/exec');

var testing = function(){};

testing.prototype.showDatePicker = function (arg0, success, error) {
    exec(success, error, 'datepickercordovaplugin', 'showDateMethod', [arg0]);
};

testing.install = function () {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins = new testing();
    return window.plugins;
  
  };
cordova.addConstructor(testing.install);

});
