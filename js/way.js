function Way (x,y,img,canvas){
	this.x=x;
	this.y=y;
	this.type=0;
	this.img=img;
	this.canvas=canvas;
	ways.push(this);
}
/*Змінити метод відображення на ways.filter(function(item){return item.x==4&&item.y==4;});*/
Way.prototype.draw=function(){
	var imgW=582;
	var imgH=337;
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso(this.x*this.canvas.step+move,this.y*this.canvas.step-move).x;
	var cordY=iso(this.x*this.canvas.step+move,this.y*this.canvas.step-move).y;
	/*ctx.globalCompositeOperation='lighter';*/
	this.canvas.ctx.drawImage(this.img[this.type],0,0,imgW,imgH,cordX-this.canvas.step,cordY-this.canvas.step,this.canvas.step*2,this.canvas.step);
	/*ctx.globalCompositeOperation='source-over';*/
}
