class Stone
{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
           
			this.body.position.x=mouseX;
			this.body.position.y=mouseY;
			imageMode(CENTER);
			image(this.image,this.x,this.y,this.r,this.r)
		
			
	}

}
