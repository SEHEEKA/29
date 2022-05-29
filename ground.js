class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y
        this.w = w
        this.h = h
        var ops = {isStatic:true}
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,ops)
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position
        
        fill(148,127,146)
        
        rect(pos.x,pos.y,this.w,this.h)
        

    }
}