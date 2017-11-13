/*jshint esversion: 6*/

/**
 * Une fonction pipeau pour tester la documentation automatique
 * @author nathds93370@gmail.com
 * @param {number} p un nombre à tester
 * @return {boolean} un booléen valant false si n est supérieur à 10, sinon true.
 */

function testDoc(n) {
  return n < 10;
}

var res = testDoc(10);


/** @namespace */
const fonctionParamReturn1 = (function (){
  "use strict";

  /**
   * une alert() affiche le message "hello simplon!"
   * @author Nathalie Dos santos <nathds93370@gmail.com>
   * @alias fonctionParamReturn1
   * @return {undefined}
   */

  const one = function one (){
    alert("hello Simplon!");
  };

  /**
   * retourne la chaine de caracteres "hello"
   * @author Nathalie Dos santos <nathds93370@gmail.com>
   * @alias fonctionParamReturn1.hello
   * @param fonctionParamReturn1.hello
   * @return {string} la chaine "hello"
   */
  const hello = function(){
    return ("Hello");
  };


  /**
   * @author Nathalie Dos santos <nathds93370@gmail.com>
   * @alias fonctionParamReturn1.dummyReturn
   * @param fonctionParamReturn1.dummyReturn
   * @return {string} la chaine "hello"
   */
  const dummyReturn = function(p){
    return p;
  };


window.onload = function init(){
  let res;
  res = one();
  console.log(hello());
  res = hello();

  let x;
  x = dummyReturn();
  console.log(x);

};
}());
