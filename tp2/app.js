(function (){

	function affichcouleur() {
		var array = document.querySelectorAll("div");
		var i;
		for (i = 0; i < array.length; i++) {
				document.getElementById("liste").innerHTML += "<br>" +"La couleur de la div " + ( i+1 ) +" est " + array[i].textContent +"<br>";
		}
	}

	function changerCouleur(evt) {
		var sourceDeLEvent = evt.srcElement || evt.target;

		if (sourceDeLEvent.style.backgroundColor === "" ||  sourceDeLEvent.style.backgroundColor === "white") {
					sourceDeLEvent.style.backgroundColor = sourceDeLEvent.getAttribute("data-real-color");
			} else {
					sourceDeLEvent.style.backgroundColor = "white";
			}
	}

	function clickColor() {
		  var i, blocks = document.querySelectorAll(".block");

			for (i = 0; i < blocks.length; i ++) {
				console.log(blocks[i]);
				blocks[i].onclick = changerCouleur;

			}

	}

window.onload = function (){

		affichcouleur();
		clickColor();

	};

}());
