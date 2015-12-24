function Way (x,y,img,canvas){
	this.x=x;
	this.y=y;
	this.type=0;
	this.img=img;
	this.canvas=canvas;
	ways.push(this);
}
Way.prototype.draw=function(){
	var imgW=582;
	var imgH=337;
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso(this.x*this.canvas.step+move,this.y*this.canvas.step-move).x;
	var cordY=iso(this.x*this.canvas.step+move,this.y*this.canvas.step-move).y;
	if(this.orient('!=','==','!=','==')){
		var o=10;
	}else if(this.orient('==','!=','==','!=')){
		var o=5;
	}else if(this.orient('!=','==','==','!=')){
		var o=9;
	}else if(this.orient('!=','!=','==','==')){
		var o=12;
	}else if(this.orient('==','==','!=','!=')){
		var o=3;
	}else if(this.orient('==','!=','!=','==')){
		var o=6;
	}else if(this.orient('!=','!=','!=','!=')){
		var o=15;
	}else if(this.orient('!=','==','!=','!=')){
		var o=11;
	}else if(this.orient('!=','!=','!=','==')){
		var o=14;
	}else if(this.orient('==','!=','!=','!=')){
		var o=7;
	}else if(this.orient('!=','!=','==','!=')){
		var o=13;
	}else if(this.orient('==','==','==','!=')){
		var o=1;
	}else if(this.orient('==','!=','==','==')){
		var o=4;
	}else if(this.orient('==','==','!=','==')){
		var o=2;
	}else if(this.orient('!=','==','==','==')){
		var o=8;
	}else{
		var o=0;
	}
	/*ctx.globalCompositeOperation='lighter';*/
	this.canvas.ctx.drawImage(this.img[this.type][o],0,0,imgW,imgH,cordX-this.canvas.step,cordY-this.canvas.step,this.canvas.step*2,this.canvas.step);
	/*ctx.globalCompositeOperation='source-over';*/
}
Way.prototype.getWay=function(x,y){
	var w=ways.filter(function(item){
		return item.x==x&&item.y==y;
	});
	return w[0];
}
Way.prototype.orient=function(a,b,c,d){
	if(eval('this.getWay(this.x,this.y-1)'+a+'undefined')&&eval('this.getWay(this.x+1,this.y)'+b+'undefined')&&eval('this.getWay(this.x,this.y+1)'+c+'undefined')&&eval('this.getWay(this.x-1,this.y)'+d+'undefined')){
		return true;
	}else{
		return false;
	}
}
