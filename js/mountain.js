function Mountain (id,x,y,img,canvas){
	this.id=id;
	this.x=[x,x,x+1,x+1];
	this.y=[y,y+1,y,y+1];
	this.type=0;
	this.img=img;
	this.canvas=canvas;
	buildings.push(this);
}
Mountain.prototype.draw=function(){
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	/*this.canvas.ctx.globalCompositeOperation='lighter';*/
	this.canvas.ctx.drawImage(this.img[this.type],325,302,352,287,cordX-this.canvas.step*1.23,cordY-this.canvas.step*0.3,this.canvas.step*1.226*2,this.canvas.step*2);
	/*this.canvas.ctx.globalCompositeOperation='source-over';*/
}
Mountain.prototype.selectUnit=function(img,frame){
	var w=80;
	var h=52;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	ctx.drawImage(img,0+w*frame,0,w,h,cordX-40,cordY+7,w,h);
}
