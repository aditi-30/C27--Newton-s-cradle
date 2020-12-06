class roof{
    constructor(x,y,width,height)
    {
        var op={
            isStatic:true
        }
       this.width=width;
       this.height=height;
       this.x=x;
       this.y=y;
       this.body= Bodies.rectangle(x,y,width,height,op)
        World.add(world,this.body)
    }


display()
{

    
     rectMode(CENTER)
     rect(this.body.position.x,this.body.position.y,this.width,this.height)

     fill(128,128,128)
   
}
}
