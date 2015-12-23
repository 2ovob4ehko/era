function Field (shema,img,size,ctx){
	this.xSize=shema[0].length;
	this.ySize=shema.length;
	this.shema=shema;
	this.size=size;
	this.move=this.size*this.ySize/2;
	this.img=img;
	this.ctx=ctx;
	this.draw=drawF;
}
function drawF(){
	var imgW=582;
	var imgH=337;
	for(var i=0;i<this.ySize;i++){
		for(var j=0;j<this.xSize;j++){
			var x=iso(j*this.size+this.move,i*this.size-this.move).x;
			var y=iso(j*this.size+this.move,i*this.size-this.move).y;
			this.ctx.drawImage(this.img[0],0,0,
				imgW,imgH,x-this.size,y,this.size*2,this.size);
		}
	}
	this.ctx.strokeStyle="#ff0000"; /*#465432*/
	this.ctx.beginPath();
	for(var i=0;i<this.ySize;i++){
		for(var j=0;j<this.xSize;j++){
			var x=iso(j*this.size+this.move,i*this.size-this.move).x;
			var y=iso(j*this.size+this.move,i*this.size-this.move).y;
			this.ctx.moveTo(x,y);
			var p={x:this.size*j+this.move+this.size,y:this.size*i-this.move};
			this.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			p={x:this.size*j+this.move+this.size,y:this.size*i-this.move+this.size};
			this.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			p={x:this.size*j+this.move,y:this.size*i-this.move+this.size};
			this.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			this.ctx.lineTo(x,y);
		}
	}
	this.ctx.closePath();
	this.ctx.lineWidth = 1;
	this.ctx.stroke();
}
