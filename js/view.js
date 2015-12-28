//маштаб карти
var step=60;
//координати файла карти яку потрібно показувати
var j1=0;
var i1=0;
//кількість файлів карт в кординатах
var n=3;
var m=3;
//розмірність карти в файлі
var vn=10;
var vm=10;
//ініціалізація загального поля
var pole=[];
for(var a=0;a<m;a++){
	pole[a]=[];
	for(var b=0;b<n;b++){
		pole[a][b]=[];
		for(var c=0;c<vm;c++){
			pole[a][b][c]=[];
			for(var d=0;d<vn;d++){
				pole[a][b][c][d]=new Object();
			}
		}
	}
}
//масив будівель
var buildings=[];
//масив шляхів
var ways=[];
//масив зображень, які наносяться на територіяю
var images = {};
//завантаження зображень на сторінку
loadImage("way");
loadImage("s_way");
loadImage("tree");
loadImage("s_tree");
loadImage("s_way0000");
loadImage("s_way0001");
loadImage("s_way0010");
loadImage("s_way0011");
loadImage("s_way0100");
loadImage("s_way0101");
loadImage("s_way0110");
loadImage("s_way0111");
loadImage("s_way1000");
loadImage("s_way1001");
loadImage("s_way1010");
loadImage("s_way1011");
loadImage("s_way1100");
loadImage("s_way1101");
loadImage("s_way1110");
loadImage("s_way1111");
loadImage("mountain");
loadImage("mountain_cave");
//завантаження видимого файла карти
loadScript("pole_"+j1+"_"+i1+".js");
loadScript("pole_"+j1+"_"+parseInt(i1+1)+".js");
//створення канваса
$('#scr').append('<canvas id="canvas"></canvas>');
var canvas = new Canvas(pole,step,$('#canvas'));
canvas.show(step);
//масив зображень рельєфу території
var img_pole=[images["s_way"]];
//Створення об’єкту території
var field1 = new Field(img_pole,canvas);
//масив зображень виду дерева
var img_tree=[images["s_tree"],images["tree"]];
//Створення об’єкту дерева
new Tree(1,2,2,img_tree,canvas);
new Tree(1,2,3,img_tree,canvas);
new Tree(1,3,2,img_tree,canvas);
new Tree(1,3,3,img_tree,canvas);
//масив зображень виду гір
var img_mount=[images["mountain"],images["mountain_cave"]];
//Створення об’єкту гора
new Mountain(1,5,2,img_mount,canvas);
var mountain1=new Mountain(1,6,4,img_mount,canvas);
mountain1.type=1;
//масив зображень виду шляхів
var img_ways=[
	[images["s_way0000"],images["s_way0001"],images["s_way0010"],images["s_way0011"],images["s_way0100"],images["s_way0101"],images["s_way0110"],images["s_way0111"],images["s_way1000"],images["s_way1001"],images["s_way1010"],images["s_way1011"],images["s_way1100"],images["s_way1101"],images["s_way1110"],images["s_way1111"]]
];
//Створення об’єкту шлях
new Way(1,1,4,img_ways,canvas);
new Way(1,2,4,img_ways,canvas);
new Way(1,3,4,img_ways,canvas);
new Way(1,4,4,img_ways,canvas);
new Way(1,4,3,img_ways,canvas);
new Way(1,4,2,img_ways,canvas);
new Way(1,4,1,img_ways,canvas);
new Way(1,5,4,img_ways,canvas);
new Way(1,4,5,img_ways,canvas);
new Way(1,7,7,img_ways,canvas);
//Перемалювання
setInterval(function(){
	canvas.clear()
	field1.draw();
	ways.forEach(function(item){
		item.draw();
	});
	buildings.forEach(function(item){
		item.draw();
	});
},100);
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
