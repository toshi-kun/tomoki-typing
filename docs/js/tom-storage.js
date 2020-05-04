(function(window){

  var data = {};

  function init(){

  };

  function Storage(){

  }

  Storage.KEY_DIFFICULTY = "difficulty";

  Storage.prototype.set = function( key, val ){
    return localStorage.setItem(key,val);
  };

  
  Storage.prototype.get = function( key ){
    var ret = localStorage.getItem(key);
    try{
      return JSON.parse(key);
    }catch(ex){
      return ret;
    }
  };

  window.TomStorage = Storage;
  window.addEventListener('DOMContentLoaded', init );

})(window);
