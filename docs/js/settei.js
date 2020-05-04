(function(window){

  function init(){
    console.log("loaded");

    let nodes = window.document.getElementsByClassName("difficulty");
    for(var i=0 ; i<nodes.length ; i++ ){
	//console.log(nodes[i].innerText);
	nodes[i].addEventListener("click", click);
    }

  };

  function click(){
      alert( this.innerText );
      history.back();
  };


  window.addEventListener('DOMContentLoaded', init );

})(window)
