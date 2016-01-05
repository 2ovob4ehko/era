function Tree (id,x,y,img,canvas){
	this.id=id;
	this.x=[x];
	this.y=[y];
	this.type=0;
	this.img=img;
	this.canvas=canvas;
	this.data={
		inhabited:true,/*можливість заселення*/
		population:0,/*кількість проживаючих*/
		populationMax:10,/*максимальна кількість проживаючих*/
		recover:false,/*здатність до переродження*/
		woodMax:300,/*кількість деревини*/
		woodRemoved:0,/*деревини видобуто*/
		fruitMax:600,/*кількість плодів за сезон*/
		fruitRemoved:0/*кількість плодів зібрано за сезон, на початку нового сезону значення збивається*/
	};
	buildings.push(this);
	trees.push(this);
}
Tree.prototype.draw=function(){
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	/*ctx.globalCompositeOperation='lighter';*/
	this.canvas.ctx.drawImage(this.img[this.type],201,156,438,382,cordX-this.canvas.step*0.77,cordY-this.canvas.step*0.35,this.canvas.step*1.15,this.canvas.step);
	/*ctx.globalCompositeOperation='source-over';*/
}
Tree.prototype.selectUnit=function(frame){
	var move=this.canvas.step*this.canvas.ySize/2;
	var cordX=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).x;
	var cordY=iso((this.x[0]-1)*this.canvas.step+move,(this.y[0]-1)*this.canvas.step-move).y;
	this.canvas.ctx.strokeStyle="rgba(225, 130, 0,"+frame+")";
	this.canvas.ctx.beginPath();
	this.canvas.ctx.moveTo(cordX,cordY);
	var p={x:this.canvas.step*(this.x-1)+move+this.canvas.step,y:this.canvas.step*(this.y-1)-move};
	this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
	p={x:this.canvas.step*(this.x-1)+move+this.canvas.step,y:this.canvas.step*(this.y-1)-move+this.canvas.step};
	this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
	p={x:this.canvas.step*(this.x-1)+move,y:this.canvas.step*(this.y-1)-move+this.canvas.step};
	this.canvas.ctx.lineTo(iso(p.x,p.y).x,iso(p.x,p.y).y);
	this.canvas.ctx.lineTo(cordX,cordY);
	this.canvas.ctx.closePath();
	this.canvas.ctx.lineWidth = 3;
	this.canvas.ctx.stroke();
}
Tree.prototype.showInformation=function($tag){
	$tag.html('');
	var $table=$("<table></table>");
	if(this.data.inhabited){
		$table.append('<tr><td>Населення</td><td>'+this.data.population+'/'+this.data.populationMax+'</td></tr>');
	}else{
		$table.append('<tr><td>Плоди</td><td>'+parseInt(this.data.fruitMax-this.data.fruitRemoved)+'/'+this.data.fruitMax+'</td></tr>');
		$table.append('<tr><td>Деревина</td><td>'+parseInt(this.data.woodMax-this.data.woodRemoved)+'/'+this.data.woodMax+'</td></tr>');
	}
	$tag.append('<h2>Дерево</h2><p>Дані:</p>',$table);
	$tag.css("display","block");
}
