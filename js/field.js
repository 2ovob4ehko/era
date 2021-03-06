function Field (img,canvas){
	this.canvas=canvas;
	this.type=0;
	this.img=img;
}
Field.prototype.draw=function(){
	var imgW=582;
	var imgH=337;
	var move=this.canvas.step*this.canvas.ySize/2;
	for(var i=0;i<this.canvas.ySize;i++){
		for(var j=0;j<this.canvas.xSize;j++){
			var x=iso(j*this.canvas.step+move,i*this.canvas.step-move).x;
			var y=iso(j*this.canvas.step+move,i*this.canvas.step-move).y;
			this.canvas.ctx.drawImage(this.img[this.type],0,0,
				imgW,imgH,x-this.canvas.step,y,this.canvas.step*2,this.canvas.step);
		}
	}
	this.canvas.ctx.strokeStyle="#465432"; /*#465432*/
	this.canvas.ctx.beginPath();
	for(var i=0;i<this.canvas.ySize;i++){
		for(var j=0;j<this.canvas.xSize;j++){
			var x=iso(j*this.canvas.step+move,i*this.canvas.step-move).x;
			var y=iso(j*this.canvas.step+move,i*this.canvas.step-move).y;
			this.canvas.ctx.moveTo(x,y);
			var p={x:this.canvas.step*j+move+this.canvas.step,y:this.canvas.step*i-move};
			this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			p={x:this.canvas.step*j+move+this.canvas.step,y:this.canvas.step*i-move+this.canvas.step};
			this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			p={x:this.canvas.step*j+move,y:this.canvas.step*i-move+this.canvas.step};
			this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
			this.canvas.ctx.lineTo(x,y);
		}
	}
	this.canvas.ctx.closePath();
	this.canvas.ctx.lineWidth = 1;
	this.canvas.ctx.stroke();
}
Field.prototype.setFromMap=function(){
	for(var l=0;l<this.canvas.shema.length;l++){
		for(var k=0;k<this.canvas.shema[l].length;k++){
			for(var i=0;i<this.canvas.shema[l][k].length;i++){
				for(var j=0;j<this.canvas.shema[l][k][i].length;j++){
					if(this.canvas.shema[l][k][i][j].m==2){
						//Створення об’єкту дерева
						new Tree(1,j+1+10*k,i+1+10*l,img_tree,this.canvas);
					}else if(this.canvas.shema[l][k][i][j].m==3){
						//Створення об’єкту гора
						new Mountain(1,j+1+10*k,i+1+10*l,img_mount,this.canvas);
					}
				}
			}
		}
	}
}
