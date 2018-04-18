function getfahuo(){
var not3str="";
if(not3chanpin.length !=0){not3str=not3str+not3chanpin[Math.floor((Math.random()*not3chanpin.length))];}
if(not3yanse.length !=0){not3str=not3str+not3yanse[Math.floor((Math.random()*not3yanse.length))];}
if(not3chima.length !=0){not3str=not3str+not3chima[Math.floor((Math.random()*not3chima.length))];}
return not3str;
}

function GetDateStr(AddDayCount) 
{ 
var dd = new Date(); 
dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
var y = dd.getFullYear(); 
var m = dd.getMonth()+1;//获取当前月份的日期 
var d = dd.getDate(); 
return y+" - "+m+" - "+d; 
} 
document.writeln("            <li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  河南的 刘小姐 （189 **** 2158）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+"  [ 2件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  广西的 张先生 （152 **** 4850）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+"  [ 1件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li>");
document.writeln("            <li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  上海的 周先生 （138 **** 7652）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+"  [ 2件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  天津的 吴小姐 （158 **** 5487）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+"  [ 3件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li>");
document.writeln("            <li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  北京的 朱先生 （137 **** 5589<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+"  [ 2件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  湖北的 陈小姐 （152 **** 6658）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+"  [ 1件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li>");
document.writeln("            <li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  江苏的 田小姐 （133 **** 4587）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 2件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  浙江的 钟先生 （134 **** 5889）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 1件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  黑龙江的 苏小姐 （135 **** 7312）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 1件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  吉林的 胡先生 （189 **** 5899）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 3件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  重庆的 刘先生 （136 **** 5858）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 1件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  辽宁的 赵先生 （158 **** 7721）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 3件 ] 已发货 <strong>√<\/strong><\/div>");
document.writeln("            <\/li><li class=\"bord_l\">");
document.writeln("                <div class=\"bord_l\">"+GetDateStr(-1)+"  河北的 李小姐 （187 **** 5587）<\/div>");
document.writeln("                <div class=\"li_bord\">"+getfahuo()+" [ 1件 ] 已发货 <strong>√<\/strong><\/div>");