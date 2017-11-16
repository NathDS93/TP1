var app = (function init(){

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


var tab = [];
var Produit = function Produit(nom, prix, description) {
  this.nom = nom;
  this.prix = prix;
  this.description = description;
};


var ajouterProduit = function() {

  var txt = document.getElementById("ajout_nom_prod").value;
  var txt2 = document.getElementById("ajout_prix_prod").value;
  var txt3 = document.getElementById("ajout_description_prod").value;
  if (txt === "") {
    return false;
  } else {
  document.getElementById("my_list").innerHTML += "<li>" + txt + "</li>";
}
  tab.push(txt, txt2, txt3);
};

function randomNumber() {
  var min = 1;
  var max = 9999999999;
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  var timeNow = new Date().getTime();
  document.getElementById('ajout_ref_prod').value = num + timeNow;
}



window.onload = function init(){
  items = document.querySelectorAll("#nav .item");
  console.log(items);
  ecouterClicks();
randomNumber();
};

  return {
    ajouterProduit: ajouterProduit
  };





  //
  // function afficherProduitSup(){
  //
  //   document.getElementById("listesup").innerHTML +="<li>" + txt + "</li>";
  //
  // }


  // etagere = new Produit ("Kallax", 35, "lkjkj");
  // tapis = new Produit("Adum", 50, "JGjhguh");
  // commode = new Produit("Malm" 125, "jkhkjhg");
  // table = new Produit("Linnmon", 29.50, "hfgfhgf");


}());
