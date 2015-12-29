//Функції кнопок керування масштабом
$('#size_plus').on('click',function(){
	if(step<1040){
		step/=0.7;
		canvas.show(step);
	}
});
$('#size_minus').on('click',function(){
	if(step>15){
		step*=0.7;
		canvas.show(step);
	}
});
//функція динамічного завантаження скрипта
function loadScript(url){
   $('head').append('<script src="js/'+url+'" type="text/javascript"></script>');
}
//Функція ізометрично перетворення
function iso(x,y){
	var point = {};
	point.x = x - y;
	point.y = (x + y) / 2;
	return point;
}
//Функція зворотнього ізометричного перетворення
function twoD(x,y){
	var point = {};
	point.x = (2 * y + x) / 2;
	point.y = (2 * y - x) / 2;
	return point;
}
//функція завантаження зображень на сторінку
function loadImage(name){
  images[name]=new Image();
  images[name].src="sprites/"+name+".png";
}
$("#scr")[0].addEventListener('contextmenu',function(e){
	e.preventDefault();
},false);
var curYPos=0,curXPos=0,curMove=false;
$('#scr').mousemove(function(e){
  if(curMove===true){
		$("#scr").scrollTop(function(i,v){return v-(-curYPos+(curYPos=e.clientY));});
		$("#scr").scrollLeft(function(i,v){return v-(-curXPos+(curXPos=e.clientX));});
  }
});
$('#scr').mousedown(function(e){
	curMove=true;
	curYPos=e.clientY;
	curXPos=e.clientX;
});
$(document).mouseup(function(e){
	curMove=false;
});
//зміна стану декорацій в залежності від ери
function setEra(){
	if(era==1){
		field1.type=0;
		trees.forEach(function(item){
			item.type=0;
		});
	}else if(era==2){
		field1.type=1;
		trees.forEach(function(item){
			item.type=1;
		});
	}
}
