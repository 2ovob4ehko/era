function Homo (id,x,y,img,quantity,canvas){
	this.id=id;
	this.x=[x];
	this.y=[y];
	this.type=0;
	this.quantity=quantity;
	this.img=img;
	this.canvas=canvas;
	this.data={

	};
	homos.push(this);
}
Homo.prototype.draw=function(){

}
