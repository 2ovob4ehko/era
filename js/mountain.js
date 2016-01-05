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
Mountain.prototype.selectUnit=function(frame){
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	this.canvas.ctx.strokeStyle="rgba(225, 130, 0,"+frame+")";
	this.canvas.ctx.beginPath();
	this.canvas.ctx.moveTo(cordX,cordY);
	var p={x:this.canvas.step*(this.x[0]-1)+move+this.canvas.step*2,y:this.canvas.step*(this.y[0]-1)-move};
	this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
	p={x:this.canvas.step*(this.x[0]-1)+move+this.canvas.step*2,y:this.canvas.step*(this.y[0]-1)-move+this.canvas.step*2};
	this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
	p={x:this.canvas.step*(this.x[0]-1)+move,y:this.canvas.step*(this.y[0]-1)-move+this.canvas.step*2};
	this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
	this.canvas.ctx.lineTo(cordX,cordY);
	this.canvas.ctx.closePath();
	this.canvas.ctx.lineWidth = 3;
	this.canvas.ctx.stroke();
}
Mountain.prototype.showInformation=function($tag){
	$tag.html('');
	$tag.append('<h2>Гора</h2>');
	$tag.css("display","block");
}
