(function init(){
var pageModule = [];

window.onload = function (){
  var header = document.getElementById('main_header');
  var nav = document.getElementById('main_nav');
  var aside = document.getElementById('main_aside');
  var footer = document.getElementById('main_footer');

  function getPageModule (p){
    pageModule.push(p);
  }
  getPageModule(header);
  getPageModule(nav);
  getPageModule(aside);
  getPageModule(footer);
  console.log(pageModule);

  function styliserModule(num, color, bg){

   pageModule[num].style.color = color;
   pageModule[num].style.background = bg;
  }
  styliserModule(0, "#B5BB3E", "#6579C4");
  styliserModule(1, "#F0F6F5", "#9A4597");
  styliserModule(2, "#CF729C", "#0BDDBB");
  styliserModule(3, "#F0F6F5", "#E07B56");

  function getModuleInfos(num) {
    var infos = pageModule[num].getBoundingClientRect();
    var obj = {
      id : pageModule[num].id,
      tag : pageModule[num].tagName,
      class : pageModule[num].className,
      a: infos.top,
      b: infos.right,
      c: infos.left,
      d: infos.bottom
    };
    return obj;
  }
console.log(getModuleInfos(0));
 }
}());
