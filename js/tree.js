function Tree (id,x,y,img,canvas){
	this.id=id;
	this.x=x;
	this.y=y;
	this.step=canvas.step;
	this.img=img;
	this.ctx=canvas.ctx;
	this.canvas=canvas;
}
Tree.prototype.draw=function(step){
	if(typeof(step)!='undefined') this.step=step;
	var move=this.step*this.canvas.ySize/2;
	var cordX=iso((this.x-1)*this.step+move,(this.y-1)*this.step-move).x;
	var cordY=iso((this.x-1)*this.step+move,(this.y-1)*this.step-move).y;
	/*ctx.globalCompositeOperation='lighter';*/
	this.ctx.drawImage(this.img,201,156,438,382,cordX-this.step*0.77,cordY-this.step*0.35,this.step*1.15,this.step);
	/*ctx.globalCompositeOperation='source-over';*/
}
Tree.prototype.selectUnit=function(img,frame){
	var w=80;
	var h=52;
	var cordX=iso((this.x-1)*this.step+move,(this.y-1)*this.step-move).x;
	var cordY=iso((this.x-1)*this.step+move,(this.y-1)*this.step-move).y;
	ctx.drawImage(img,0+w*frame,0,w,h,cordX-40,cordY+7,w,h);
}
