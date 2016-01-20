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
//функції переміщення огляду за допомогою миші
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
//Зміна стану карти за сценарієм
//Порядкой номер Ери
var era=1;
var massage={m:0,e:true};
function scenario(){
	if((massage.m==0)&&(massage.e)){
		$('#massage_scroll').html('<img src="http://ours-nature.ru/new_site/img/1213814452/i_008.jpg"><p>Гра починається з доби, коли люди людьми не звалися та ще жили на деревах.</p><p>Вам дається десяток людиноподібних мавп. Зараз вам потрібно поселити їх на дереві та спостерігати за їх розселенням.</p>');
		$('#massage h2').html('Ласкаво просимо до гри');
		$('#massage').css("display","block");
	}else{
		$('#massage').css("display","none");
	}
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
//Функція визначення співпадіння двох координат
function hitTest(a,b){
	var bool=0;
	for(var i=0;i<a.x.length;i++){
		for(var j=0;j<b.x.length;j++){
			if(((a.x[i]>(b.x[j]-1)*step)&&(a.x[i]<b.x[j]*step))&&((a.y[i]>(b.y[j]-1)*step)&&(a.y[i]<b.y[j]*step))){
	    	bool++;
	  	}
		}
	}
	if(bool>0){
		return true;
	}else{
		return false;
	}
}
//Функція визначення координат мишки на канвасі
function mouse(canvas,e){
  var rect = canvas.getBoundingClientRect();
  return{
    x: e.pageX-rect.left,
    y: e.pageY-rect.top
  };
}
