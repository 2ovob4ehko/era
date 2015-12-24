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
//масив зображень, які наносяться на територіяю
var images = {};
//завантаження зображень на сторінку
loadImage("way");
loadImage("tree");
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
var tree1 = new Tree(1,2,2,images["tree"],canvas);
var tree2 = new Tree(1,2,3,images["tree"],canvas);
var tree3 = new Tree(1,3,2,images["tree"],canvas);
var tree4 = new Tree(1,3,3,images["tree"],canvas);
//Перемалювання
setInterval(function(){
	canvas.clear()
	field1.draw(step);
	tree1.draw(step);
	tree2.draw(step);
	tree3.draw(step);
	tree4.draw(step);
},100);
//Функції кнопок керування масштабом
$('#size_plus').on('click',function(){
	step/=0.7;
	canvas.show(step);
});
$('#size_minus').on('click',function(){
	step*=0.7;
	canvas.show(step);
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
