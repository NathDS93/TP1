var app = (function init() {

  var nbrProd = 4;
  var actuelRef = 4;
  var items;

  function scroller() {
    console.log(this);
    var cible, elementCible;
    cible = this.getAttribute("data-target");
    elementCible = document.getElementById(cible);
    window.smoothScroll(elementCible, 500);
  }

  function ecouterClicks() {
    var i;
    for (i = 0; i < items.length; i += 1) {
      items[i].onclick = scroller;
    }
  }

  var Produit = function Produit(nom, prix, description) {
    this.nom = nom;
    this.prix = prix;
    this.description = description;
  };

  var modifierProduit = function() {
    var txt = new Array();
    txt[0] = document.getElementById("ref_prod").value;
    txt[2] = document.getElementById("nom_prod").value;
    txt[3] = document.getElementById("prix_prod").value;
    txt[4] = document.getElementById("description_prod").value;

    for (var y = 2; y <= 4; y++) {
      console.log(txt[y]);
      if (txt[y] != "")
        document.getElementById("ref-" + txt[0]).querySelector(".td-" + y).textContent = txt[y];
    }
  };

  var ajouterProduit = function() {
    var txt = new Array();
    txt[0] = document.getElementById("ajout_ref_prod").value;
    txt[1] = document.getElementById("ajout_nom_prod").value;
    txt[2] = document.getElementById("ajout_prix_prod").value;
    txt[3] = document.getElementById("ajout_description_prod").value;

    for (var i = 0; i <= 3; i++) {
      if (txt[i] === "") {
        console.log("c'est pas bon");
        return false;
      }
    }
    document.getElementById("tableau").innerHTML += "<tr id=\"ref-" + actuelRef + "\"><td class=\"td-1\">" + txt[0] + "<td class=\"td-2\">" + txt[1] + "<td class=\"td-3\">" + txt[2] + "<td class=\"td-4\">" + txt[3] + "<td><button class=\"trash\" onclick=\"app.supprimerProduit(this)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></td></tr>";
    randomNumber();
  };

  var supprimerProduit = function(monThis) {
    nbrProd--;
    monThis.parentNode.parentNode.remove();
  };

  function randomNumber() {
    actuelRef++;
    document.getElementById('ajout_ref_prod').value = actuelRef;
  }

  window.onload = function init() {
    items = document.querySelectorAll("#nav .item");
    console.log(items);
    ecouterClicks();
    randomNumber();
  };

  return {
    ajouterProduit: ajouterProduit,
    supprimerProduit: supprimerProduit,
    modifierProduit: modifierProduit
  };
}());
