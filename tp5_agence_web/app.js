var app = (function init(){

var tab = [];
var Produit = function Produit(p) {
  this.nom = p.nom;
  this.prix = p.prix;
  this.description = p.description;
};

var ajouterProduit = function() {
  var ref = 
  var txt = document.getElementById("ajout_nom_prod").value;
  var txt2 = document.getElementById("ajout_prix_prod").value;
  var txt3 = document.getElementById("ajout_description_prod").value;
  document.getElementById("my_list").innerHTML += "<li>" + txt + "</li>";
  tab.push(txt, txt2, txt3);
  console.log(tab);
};



window.onload = function(){

  return {
    ajouterProduit: ajouterProduit
  };
};


}());
