function Canvas (shema,step,tag){
	this.ctx=tag[0].getContext('2d');
	this.shema=shema;
	this.xSize=shema[j1][i1][0].length*3;
	this.ySize=shema[j1][i1].length*3;
	this.step=step;
}
Canvas.prototype.show=function(step){
	if(typeof(step)!='undefined') this.step=step;
	var move=this.step*this.ySize/2;
	this.ctx.canvas.width=iso(this.step*(this.xSize-1)+move+this.step,this.step*0-move).x;
	this.ctx.canvas.height=iso(this.step*(this.xSize-1)+move+this.step,this.step*(this.ySize-1)-move+this.step).y;
}
Canvas.prototype.clear=function(){
	this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
}
