class Tree
{
    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		this.image=loadImage("tree.png")
		
		this.body=Bodies.rectangle(x,y,450,10,{isSatic:true});
		World.add(world, this.body)
		
	}
	display()
	{
			push()
			fill(255)
			imageMode(CENTER);
			image(this.image,this.x,this.y)
			pop()
			
	}

}
