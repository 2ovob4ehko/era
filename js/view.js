//маштаб карти
var step=60;
//координати файла карти яку потрібно показувати
var j1=0;
var i1=0;
//кількість файлів карт в кординатах
var n=1;
var m=1;
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
loadImage("tree");
loadImage("way0000");
//завантаження видимого файла карти
loadScript("pole_"+j1+"_"+i1+".js");
//створення канваса
$('#scr').append('<canvas id="canvas"></canvas>');
var canvas = new Canvas(pole[j1][i1],step,$('#canvas'));
canvas.show(step);
//масив зображень рельєфу території
var img_pole=[images["way"]];
//Створення об’єкту території
var field1 = new Field(img_pole,canvas);
//Створення об’єкту дерева
new Tree(1,2,2,images["tree"],canvas);
new Tree(1,2,3,images["tree"],canvas);
new Tree(1,3,2,images["tree"],canvas);
new Tree(1,3,3,images["tree"],canvas);
//масив зображень виду шляхів
var img_ways=[images["way0000"]];
//Створення об’єкту шлях
/*Змінити метод відображення на ways.filter(function(item){return item.x==4&&item.y==4;});*/
new Way(1,4,img_ways,canvas);
new Way(2,4,img_ways,canvas);
new Way(3,4,img_ways,canvas);
new Way(4,4,img_ways,canvas);
new Way(4,3,img_ways,canvas);
new Way(4,2,img_ways,canvas);
new Way(4,1,img_ways,canvas);
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
