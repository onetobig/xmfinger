;define("m-go2top",function(){"use strict";function o(){t=$("#js_go2top"),t.on("click",function(){return 0==c?!1:(n(0),!1)}),$(window).on("scroll",function(){var o=document.body.scrollTop||document.documentElement.scrollTop;e>o?1==c&&(t.removeClass("show"),c=0):0==c&&(t.addClass("show"),c=1)})}function n(o){function n(){var n=document.body.scrollTop||document.documentElement.scrollTop;n+=Math.round((o-n)/2),Math.abs(n-o)<=1?(document.body.scrollTop=document.documentElement.scrollTop=n=o,window.clearInterval(t)):document.body.scrollTop=document.documentElement.scrollTop=n}var t;t=window.setInterval(n,15)}var t,c=0,e=200;$(function(){o()})});
;define("m-nav",function(){"use strict";function n(){t=$(document.body),o=$("#js_nav");var n=t.attr("data-menu");o.find('.menu a[data-menu="'+n+'"]').remove(),o.on("click",".action",function(n){a?o.removeClass("show"):o.addClass("show"),a=!a}),$(document).on("touchstart",function(n){var t=n.target;return $.contains(o[0],t)||o[0]==t?!0:void(a&&(o.removeClass("show"),a=0))})}var t,o,a;$(function(){n()})});
;define("advantage",function(n){"use strict";n("m-nav"),n("m-go2top")});
;define("contact",function(t){"use strict";t("m-nav"),t("m-go2top")});
;define("index",function(n){"use strict";function t(){a=$("#js_service"),o=a.children(),r=o.length,a.on("click","li",function(){var n=$(this),t=n.index();e(t),c()}),e(0),i()}function e(n){n=Math.max(Math.min(r-1,n),0),n!=f&&(o.removeClass(s).eq(n).addClass(s),f=n)}function i(){u=setInterval(function(){var n=f+1;n>=r&&(n=0),e(n)},v)}function c(){u&&(clearInterval(u),u=null),l&&clearTimeout(l),l=setTimeout(function(){i()},3*v)}n("m-nav"),n("m-go2top");var a,o,u,l,r=0,s="active",f=-1,v=5e3;$(function(){t()})});
;define("resources",function(e){"use strict";function n(e,n,t){var a=$(e),l=$(n),i=a.children(),c=l.children(),s=i[0].tagName,o=$.extend({prev:null,next:null,start:0,auto:0,animate:!1,activeClass:"active",event:"click",onevent:null,callback:null},t),r=o.prev?$(o.prev):null,v=o.next?$(o.next):null,u=-1,f=i.length-1,d=null,h=function(){o.auto&&(clearInterval(d),d=setInterval(function(){var e=u>=f?0:u+1;C(e)},o.auto))},C=function(e){var n,t,a;e=Math.min(Math.max(e,0),f),e!=u&&(u=e,n=i.eq(e),i.removeClass(o.activeClass),n.addClass(o.activeClass),o.animate?(t=c.filter(":visible"),a=c.eq(e-o.start),a.css("z-index",1).fadeIn(300,function(){a.addClass(o.activeClass).css("z-index",0),t.not(a).removeClass(o.activeClass).hide(),"function"==typeof o.callback&&o.callback(n[0],a[0])})):(c.removeClass(o.activeClass).hide().eq(e-o.start).addClass(o.activeClass).show(),"function"==typeof o.callback&&o.callback(n[0],c[e-o.start])))};r&&r.on(o.event,function(){C(u-1)}),v&&v.on(o.event,function(){C(u+1)}),a.on(o.event,function(e){if("function"==typeof o.onevent&&o.onevent(e)===!0)return!0;e.stopPropagation(),e.preventDefault();var n=$(e.target);n.is(s)||(n=n.parents(s).eq(0)),0===n.length||n.is("."+o.activeClass)||C(n.index())}),C(o.start),h()}function t(){var e=$("#js_channel"),t=$("#js_media");n(e.children(".ui-tab"),e.children(".cont"),{event:"click"}),n(t.children(".ui-tab"),t.children(".cont"),{event:"click"}),a("#js_swipe")}e("m-nav"),e("m-go2top");var a=e("swipe");$(function(){t()})});