;define("m-navbar",function(a,n,t){"use strict";function e(){var a=($(window),$(document.body)),n=$("#js_navbar"),t=$("#js_menu"),e=a.attr("data-menu");r=t.children(),e&&i(e),o(n,{minTop:1,space:0})}function i(a){r.removeClass("active").each(function(){var n=$(this),t=n.attr("data-menu");return t==a?(n.addClass("active"),!1):void 0})}var r,o=a("autoFixed");t.exports={init:e}});
;define("about",function(n){"use strict";function i(){a.init(),t(".animation")}var a=(n("base"),n("m-navbar")),t=(n("swipe"),n("animation"));$(function(){i()})});
;define("channel",function(n){"use strict";function t(){a.init(),e("#swipe_banner",{auto:8e3}),o(".animation");var n=0;o(".countto",{space:30,callback:function(t){var a=$(t);n+=150,setTimeout(function(){a.countTo({refreshInterval:50,onComplete:function(){var t=a.attr("data-text");t&&a.text(t),n=0}})},n)}})}var a=(n("base"),n("m-navbar")),e=n("swipe"),o=(n("jquery.countTo"),n("animation"));$(function(){t()})});
;define("document",function(n){"use strict";function i(){t.init(),a(".animation")}var t=(n("base"),n("m-navbar")),a=n("animation");$(function(){i()})});
;define("index",function(n){"use strict";function i(){a.init(),e("#swipe_banner",{auto:8e3}),t(".animation")}var a=(n("base"),n("m-navbar")),e=n("swipe"),t=n("animation");$(function(){i()})});
;define("login",function(n){"use strict";function i(){o.init(),s(),t.init()}function s(){{var n=$("#js_login"),i=n.find(".js-user"),s=n.find(".js-pass");n.find(".js-tip")}n.on("submit",function(){return""==i.val()?(i.focus(),!1):""==s.val()?(s.focus(),!1):void 0})}var o=(n("base"),n("m-navbar")),t=(n("swipe"),n("jplaceholder"));$(function(){i()})});
;define("strategy",function(n){"use strict";function i(){a.init(),t("#swipe_banner",{auto:8e3}),e(".animation")}var a=(n("base"),n("m-navbar")),t=n("swipe"),e=n("animation");$(function(){i()})});