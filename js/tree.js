function Tree (id,x,y,img,step,ctx,move){
	this.id=id;
	this.x=x;
	this.y=y;
	this.step=step;
	this.img=img;
	this.ctx=ctx;
	this.move=move;
	this.draw=drawT;
	this.selectUnit=selectUnit;
}
function drawT(){
	var cordX=iso((this.x-1)*this.step+this.move,(this.y-1)*this.step-this.move).x;
	var cordY=iso((this.x-1)*this.step+this.move,(this.y-1)*this.step-this.move).y;
	/*ctx.globalCompositeOperation='lighter';*/
	this.ctx.drawImage(this.img,201,156,438,382,cordX-this.step*0.77,cordY-this.step*0.35,this.step*1.15,this.step);
	/*ctx.globalCompositeOperation='source-over';*/
}
function selectUnit(img,frame){
	var w=80;
	var h=52;
	var cordX=iso((this.x-1)*this.step+this.move,(this.y-1)*this.step-this.move).x;
	var cordY=iso((this.x-1)*this.step+this.move,(this.y-1)*this.step-this.move).y;
	ctx.drawImage(img,0+w*frame,0,w,h,cordX-40,cordY+7,w,h);
}
