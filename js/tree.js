function Tree (id,x,y,img,canvas){
	this.id=id;
	this.x=[x];
	this.y=[y];
	this.type=0;
	this.img=img;
	this.canvas=canvas;
	buildings.push(this);
	trees.push(this);
}
Tree.prototype.draw=function(){
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	/*ctx.globalCompositeOperation='lighter';*/
	this.canvas.ctx.drawImage(this.img[this.type],201,156,438,382,cordX-this.canvas.step*0.77,cordY-this.canvas.step*0.35,this.canvas.step*1.15,this.canvas.step);
	/*ctx.globalCompositeOperation='source-over';*/
}
Tree.prototype.selectUnit=function(img,frame){
	var w=80;
	var h=52;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	ctx.drawImage(img,0+w*frame,0,w,h,cordX-40,cordY+7,w,h);
}
