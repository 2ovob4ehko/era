function Mountain (id,x,y,img,canvas){
	this.id=id;
	this.x=[x,x,x+1,x+1];
	this.y=[y,y+1,y,y+1];
	this.type=0;
	this.img=img;
	this.canvas=canvas;
	this.data={
		inhabited:true,/*можливість заселення*/
		population:0,/*кількість проживаючих*/
		populationMax:100,/*максимальна кількість проживаючих*/
		stone:10000,/*кількість каміння*/
		cuprum:500,/*кількість міді*/
		iron:5000,/*кількість заліза*/
		gold:100,/*кількість золота*/
		silver:200/*кількість срібла*/
	};
	buildings.push(this);
	mountains.push(this);
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
	var $table=$("<table></table>");
	if(this.data.inhabited){
		if(this.type==1){
			$table.append('<tr><td>Населення</td><td>'+this.data.population+'/'+this.data.populationMax+'</td></tr>');
		}
		$table.append('<tr><td>Каміння</td><td>'+this.data.stone+'</td></tr>');
	}else{
		$table.append('<tr><td>Каміння</td><td>'+this.data.stone+'</td></tr>');
		$table.append('<tr><td>Мідь</td><td>'+this.data.cuprum+'</td></tr>');
		$table.append('<tr><td>Залізо</td><td>'+this.data.iron+'</td></tr>');
		$table.append('<tr><td>Золото</td><td>'+this.data.gold+'</td></tr>');
		$table.append('<tr><td>Срібло</td><td>'+this.data.silver+'</td></tr>');
	}
	$tag.append('<h2>Гора</h2><p>Дані:</p>',$table);
	$tag.css("display","block");
}
