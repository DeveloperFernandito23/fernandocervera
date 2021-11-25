!function(t){function e(t,e){var e=e||"";if(!e.length){var r={lowerLetter:"abcdefghijklmnopqrstuvwxyz0123456789",upperLetter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",symbol:",.?/\\(^)![]{}*&^%$#'\"",numeric:"0123456789",all:function(){return lowerLetter+upperLetter+symbol+numeric}};e="lowerLetter"==t?r.lowerLetter:"upperLetter"==t?r.upperLetter:"symbol"==t?r.symbol:"numeric"==t?r.numeric:polls.all()}var n=e.split("");return n[Math.floor(Math.random()*n.length)]}t.fn.shuffleLetters=function(r){var n=t.extend({step:8,fps:25,text:"",pool:"",callback:function(){}},r);return this.each(function(){var r=t(this),a="";if(r.data("animated"))return!0;r.data("animated",!0),a=n.text?n.text.split(""):r.text().split("");for(var l=[],o=[],i=0;i<a.length;i++){var u=a[i];" "!=u?(l[i]=/[a-z]/.test(u)?"lowerLetter":/[A-Z]/.test(u)?"upperLetter":"numeric",o.push(i)):l[i]="space"}r.html(""),function p(t){var i,u=o.length,s=a.slice(0);if(t>u)return r.data("animated",!1),void n.callback(r);for(i=Math.max(t,0);u>i;i++)s[o[i]]=i<t+n.step?e(l[o[i]],n.pool):"";r.text(s.join("")),setTimeout(function(){p(t+1)},1e3/n.fps)}(-n.step)})}}(jQuery);


/* menu */
jQuery(function(e){e("body").html(),!0,e("#main-menu-caller").on("click",function(){$menuCaller=e(this),$mainMenu=e("#main-menu"),$mainMenu.hasClass("activated")?$mainMenu.find("a").fadeOut("fast",function(){$mainMenu.removeClass("activated"),$menuCaller.removeClass("lines-close")}):e("#ui-layer").each(function(){$mainMenu.addClass("activated"),$menuCaller.addClass("lines-close"),setTimeout(function(){$mainMenu.find("a").each(function(n,i){e(i).css({display:"inline-block"}).shuffleLetters();var a;e(i).mouseenter(function(){a=setTimeout(function(){e(i).css({height:e(i).height()+"px",display:"inline-block"}),setTimeout(function(){e(i).css({height:"",display:"inline-block"})},1e3)},50)}),e(i).mouseleave(function(){clearTimeout(a)})})},350)})})})
/* ELIMINO ESTO DE LA SENTENCIA DE JS PORQUE SIN AL DARLE AL CLICK NO ME LLEVA A UNA PÁGINA DISTINTA 
e(".menu").on("click",function(n){n.stopPropagation(),n.preventDefault(),e("#main-menu").removeClass("activated"),e("#main-menu-caller").removeClass("lines-close") 
*/		
window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
     document.getElementById("main-menu-caller").focus();
    }
   }, false);