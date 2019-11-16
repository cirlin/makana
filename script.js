var namer=unescape(location.search).split('=')[1];
var adr=location.href;
adr=adr.split('/')
adr=(namer||(!adr[adr.length-1]))?'index':adr[adr.length-1].split('.')[0];

var butnam=['index','decor','application','reclama','foto','contact',
'batik','paint','metall','element'];
var aname=['Главная','Декор','Аппликации','Реклама','Фотографии','Контакты',
'Батик','Роспись','Металл','Элементы'];
var lefts=[68,78,52,68,50,63,78,67,72,59];
var tops=[59,122,187,249,312,370,187,249,312,370];
var fadr=(adr!='index')&&(adr!='decor')&&(adr!='contact');
if(fadr)for(var i=0;i<eval(adr).length;i++)eval(adr)[i]=new Image;
function loadf(n,m)
{
if(fadr)for(var i=n;i<m;i++)
  {
eval(adr)[i].src=adr+'/'+i+'.jpg';
document.images['m'+i].src=eval(adr)[i].src;
  }
}
function set()
{
with(document)
 {
var l=body.clientWidth;
var t=body.clientHeight;
var lft=Math.round(0.5*(l-798));
lft=(lft>0)?lft:0;
var o=images['base'].style;
o.left=lft;
if((adr=='index')||(adr=='decor'))
  {
o=images['rtop'].style;
o.left=l-177;
o=images['rbottom'].style;
o.left=l-192;
o.top=t-193;
o=images['moon'];
o.style.left=lft+295;
o.style.top=261;
o.onmouseover=function(){activate(this,true)};
o.onmouseout=function(){activate(this)};
   }
else if(adr=='contact')
   {
getElementById('h').style.left=lft+232;
o=getElementById('txt').style;
o.top=40;
o.height=70;
o=images['map'].style;
o.left=lft+200;
o=getElementById('name').style;
o.left=lft+630;
for(var i in inputs)
     {
o=getElementById(inputs[i]).style;
o.left=lft+630;
o.top=tops[i]-7;
o=getElementById('l'+i).style;
o.left=lft+635
o.top=tops[i]-24;
     }
o=getElementById('message').style;
o.left=lft+50;
o=getElementById('l6').style;
o.left=lft+200;
o.top=406;
  }
else  
   {
o=getElementById('forpic').style;
o.left=lft+193;
var o=images;
for(var i in eval(adr))
          {
o['m'+i].onmouseover=function()
                      {
this.style.height=72;
this.border=6;             
                      } 
o['m'+i].onmouseout=function()
                      {
this.style.height=80;
this.border=2;             
                      } 
o['m'+i].onclick=function(){vision(this.id)};
          }
   }
getElementById('txt').style.left=lft+193;
for(var i in butnam)
{
o=getElementById(butnam[i]);
o.style.left=lft+lefts[i];
o.style.top=tops[i];
if((adr=='decor')&&(i>1))o.style.visibility=(i>5)?'visible':'hidden';
o.onmouseout=function(){images['redbar'].style.visibility='hidden'};
o.onmouseover=function()
    {
var ob=images['redbar'].style;
ob.top=parseInt(this.style.top)-8;
ob.left=lft+153;
ob.visibility='visible';
    }
o.onclick=function()
    {
if(adr!=this.id)location.href=this.id+'.html';
return false;      
    }
}
loadf(0,9);
body.style.visibility='visible';
 } 
}
function activate(o,f)
{
var name=o.src.split('img/')[1];
o.src='img/'+((f)?'a'+name:name.substr(1));
}
function vision(n)
{
with(document)
 {
var num=n.substring(1);
var H=body.clientHeight;
var W=body.clientWidth;
var o=images['filtr'];
o.style.width=W;
o.style.height=580;
o.style.visibility='visible';
o=images['light'];
o.src=eval(adr)[num].src;
var h=o.height
var w=o.width
o.style.left=Math.round((W-parseInt(w))*0.5);
o.style.top=document.body.scrollTop+Math.round((H-parseInt(h))*0.5);
o.style.visibility='visible'; 
 }
}
function krash()
{
with(document)
 {
if(adr!='index')
  {
var o=images;
o['light'].style.visibility='hidden';
o['filtr'].style.visibility='hidden';
  }
 }
}
with(document)
{
for(var i in butnam)
     { 
var cl=(i<6)?'but':'hbut';
write('<A class='+cl+' id='+butnam[i]+' href="">'+aname[i]+'</A>');
     } 
if((adr!='index')&&(adr!='decor')&&(adr!='contact'))
    {
write('<DIV id="forpic"><TABLE width=580><TBODY>');
for(var i=0;i<ir;)
                { 
write('<TR height=131><TD align=center><img id="m'+(i++)+'" class=t height=80 border=2></TD>',
      '<TD align=center>'+((i<ir)?'<img id="m'+(i++)+'" class=t height=80 border=2></TD>':'</TD>'),
      '<TD align=center>'+((i<ir)?'<img id="m'+(i++)+'" class=t height=80 border=2></TD></TR>':'</TD></TR>'));   
                }
write('</TBODY></TABLE></DIV>',
'<img id="filtr" src="img/filtr.png">',
'<img id="light" onclick="krash()" title="Чтобы вернутся на страницу кликни!">');
    }
}