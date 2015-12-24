function Field (img,canvas){
	this.xSize=canvas.xSize;
	this.ySize=canvas.ySize;
	this.shema=canvas.shema;
	this.step=canvas.step;
	this.img=img;
	this.ctx=canvas.ctx;
}
Field.prototype.draw=function(step){
	if(typeof(step)!='undefined') this.step=step;
	var imgW=582;
	var imgH=337;
	var move=this.step*this.ySize/2;
	for(var i=0;i<this.ySize;i++){
		for(var j=0;j<this.xSize;j++){
			var x=iso(j*this.step+move,i*this.step-move).x;
			var y=iso(j*this.step+move,i*this.step-move).y;
			this.ctx.drawImage(this.img[0],0,0,
				imgW,imgH,x-this.step,y,this.step*2,this.step);
		}
	}
	this.ctx.strokeStyle="#ff0000"; /*#465432*/
	this.ctx.beginPath();
	for(var i=0;i<this.ySize;i++){
		for(var j=0;j<this.xSize;j++){
			var x=iso(j*this.step+move,i*this.step-move).x;
			var y=iso(j*this.step+move,i*this.step-move).y;
			this.ctx.moveTo(x,y);
			var p={x:this.step*j+move+this.step,y:this.step*i-move};
			this.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			p={x:this.step*j+move+this.step,y:this.step*i-move+this.step};
			this.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			p={x:this.step*j+move,y:this.step*i-move+this.step};
			this.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			this.ctx.lineTo(x,y);
		}
	}
	this.ctx.closePath();
	this.ctx.lineWidth = 1;
	this.ctx.stroke();
}
