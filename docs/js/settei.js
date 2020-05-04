(function(window){

  storage = null;

  function init(){

    let nodes = window.document.getElementsByClassName("difficulty");
    for(var i=0 ; i<nodes.length ; i++ ){
	//console.log(nodes[i].innerText);
	nodes[i].addEventListener("click", click);
    }
    storage = new TomStorage();

    $(".current-difficulty").attr("data-current", storage.get(storage.KEY_DIFFICULTY));
    //console.log("loaded : " +  storage.get(storage.KEY_DIFFICULTY));
  };

  function click(){
    //alert( this.innerText );
    storage.set(storage.KEY_DIFFICULTY, this.innerText);
    window.location.href="index.html";
  };


  window.addEventListener('DOMContentLoaded', init );

})(window)
