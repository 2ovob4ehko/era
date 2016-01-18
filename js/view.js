//маштаб карти
var step=120;
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
//Масив дерев
var trees=[];
//Масив гір
var mountains=[];
//масив шляхів
var ways=[];
//масив людей
var homos=[];
//Масив виключень
var BreakException={};
//Вибраний юніт
var selectedUnit=null;
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
loadImage("monkey");
//завантаження видимого файла карти
loadScript("map/pole_"+j1+"_"+i1+".js");
loadScript("map/pole_"+j1+"_"+parseInt(i1+1)+".js");
loadScript("map/pole_"+j1+"_"+parseInt(i1+2)+".js");
loadScript("map/pole_"+parseInt(j1+1)+"_"+i1+".js");
loadScript("map/pole_"+parseInt(j1+1)+"_"+parseInt(i1+1)+".js");
loadScript("map/pole_"+parseInt(j1+1)+"_"+parseInt(i1+2)+".js");
loadScript("map/pole_"+parseInt(j1+2)+"_"+i1+".js");
loadScript("map/pole_"+parseInt(j1+2)+"_"+parseInt(i1+1)+".js");
loadScript("map/pole_"+parseInt(j1+2)+"_"+parseInt(i1+2)+".js");
//створення канваса
$('#scr').append('<canvas id="canvas"></canvas>');
var canvas = new Canvas(pole,step,$('#canvas'));
canvas.show(step);
//масив зображень рельєфу території
var img_pole=[images["way"],images["s_way"]];
//масив зображень виду дерева
var img_tree=[images["tree"],images["s_tree"]];
//масив зображень виду гір
var img_mount=[images["mountain"],images["mountain_cave"]];
//масив зображень виду шляхів
var img_ways=[
	[images["s_way0000"],images["s_way0001"],images["s_way0010"],images["s_way0011"],images["s_way0100"],images["s_way0101"],images["s_way0110"],images["s_way0111"],images["s_way1000"],images["s_way1001"],images["s_way1010"],images["s_way1011"],images["s_way1100"],images["s_way1101"],images["s_way1110"],images["s_way1111"]]
];
//Створення об’єкту території
var field1 = new Field(img_pole,canvas);
//первинна розстановка об’єктів по полю
field1.setFromMap();
//задання першій створеній горі статусу печери
mountains[0].type=1;
//Створення об’єкту шлях
/*new Way(1,1,4,img_ways,canvas);
new Way(1,2,4,img_ways,canvas);
new Way(1,3,4,img_ways,canvas);
new Way(1,4,4,img_ways,canvas);
new Way(1,4,3,img_ways,canvas);
new Way(1,4,2,img_ways,canvas);
new Way(1,4,1,img_ways,canvas);
new Way(1,5,4,img_ways,canvas);
new Way(1,4,5,img_ways,canvas);
new Way(1,7,7,img_ways,canvas);*/
//порядковий номер кадру
var frame=0;
//Перемалювання
setInterval(function(){
	//зміна стану декорацій в залежності від ери
	scenario();
	canvas.clear()
	field1.draw();
	ways.forEach(function(item){
		item.draw();
	});
	//анімація виділеного
	if(selectedUnit != null){
		frame+=0.157;
		selectedUnit.selectUnit(Math.abs(Math.sin(frame)));
	}
	buildings.forEach(function(item){
		item.draw();
	});
},100);

$('#canvas').on('click',function(e){
	try{
		buildings.forEach(function(item){
      var p=twoD(mouse($('#canvas')[0],e).x,mouse($('#canvas')[0],e).y);
			var move=step*canvas.ySize/2;
      if(hitTest({x:[Math.ceil(p.x-move)],y:[Math.ceil(p.y+move)]},item)){
        selectedUnit=item;
				selectedUnit.showInformation($('#information'));
        throw BreakException;
      //якщо мишка не попала - зняти виділення
      }else{
        selectedUnit=null;
				$('#information').css("display","none");
      }
    });
	}catch(er){
    if(er!==BreakException) throw er;
  }
});
$("#scr").scrollLeft(3254);
