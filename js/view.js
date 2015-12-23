//маштаб карти
var step=300;
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
//змінна костиль, яка здвигає зображення, щоб воно не виходило за край канваса
var move=step*pole[j1][i1].length/2;
//задання розміру канваса
$('#canvas')[0].width=iso(step*(pole[j1][i1][0].length-1)+move+step,step*0-move).x;
$('#canvas')[0].height=iso(step*(pole[j1][i1][0].length-1)+move+step,step*(pole[j1][i1].length-1)-move+step).y;
var ctx=$('#canvas')[0].getContext('2d');
//масив зображень рельєфу території
var img_pole=[images["way"]];
//Створення об’єкту території
var field1 = new Field(pole[j1][i1],img_pole,step,ctx);
//Створення об’єкту дерева
var tree1 = new Tree(1,2,2,images["tree"],step,ctx,move);
var tree2 = new Tree(1,2,3,images["tree"],step,ctx,move);
var tree3 = new Tree(1,3,2,images["tree"],step,ctx,move);
var tree4 = new Tree(1,3,3,images["tree"],step,ctx,move);
//Перемалювання
setInterval(function(){
	ctx.clearRect(0,0,$('#canvas').width(),$('#canvas').height());
	field1.draw();
	tree1.draw();
	tree2.draw();
	tree3.draw();
	tree4.draw();
},100);


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
