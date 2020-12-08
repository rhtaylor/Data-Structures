class Vertex{
    constructor(data){
        this.data = data; 
        this.forward = null 
        this.back = null; 
        this.up = null; 
        this.down = null; 
        this.left = null; 
        this.right = null   
    } 
    getForwardVertex(){
        return this.forward; 
    } 
    setForwardVertex(vertex){ 
        let current = this; 
        let forwardV = this.forward; 
        if(vertex instanceof Vertex){ 
            if(!forwardV){ 
                this.forward = vertex; 
            } else{ 
                while(!forwardV === null){  
                current = current.getForwardVertex(); 
                forwardV = current.forward 
                } 
               forwardV.forward = vertex } 
            } }
    getbackVertex(){
        return this.back
    }
    
    setbackVertex(vertex){
        if(vertex instanceof Vertex){
            let current = this; 
            let backVertex = current.back; 
                while(backVertex){ 
                
                current = current.getbackVertex(); 
                backVertex = current.back
                } 
            
             current.back = vertex
        }
    } 

    getUpVertex(){
        return this.up
    }

    setUpVertex(vertex){
        if(vertex instanceof Vertex){
            let current = this 
            let upVertex = this.up 
            while(upVertex){
                current = current.getUpVertex() 
                upVertex = current.up
            } 
            current.up = vertex
        }
    } 
    getDownVertex(){
        return this.down
    } 
    setDownVertex(vertex){
         if(vertex instanceof Vertex){
             let current = this 
             let downVertex = this.down 
             while(downVertex){
                 current = current.getDownVertex(); 
                 downVertex = current.down
             } 
             current.down = vertex
         }
    } 


        getRightVertex(){
        return this.right
    } 
         
        setRightVertex(vertex){
            if(vertex instanceof Vertex){
                let current = this; 
                let rightVertex = current.right; 
                while(rightVertex){
                    current = current.getRightVertex(); 
                    rightVertex = current.right
                } 
                current.right = vertex
            }
        }
    getLeftVertex(){
            return this.left
        }
    setLeftVertex(vertex){
        if(vertex instanceof Vertex){
            let current = this; 
            let leftVertex = current.left; 
            while(leftVertex){
                current = current.getLeftVertex(); 
                leftVertex = current.left; 
            } 
            current.left = vertex
        }
    }

        }
 


 let randy = new Vertex("Randy"); 
 let candis = new Vertex("Candis");
 let third = new Vertex("Lady friend");
 let sky = new Vertex("flying") 
 let skyHigh = new Vertex("SUPER HIGH")
 let right = new Vertex("On your Right") 
 let rightOfRight = new Vertex("On your RIGHT RIGHT")
 let leftOfVertex = new Vertex("on your left")
 let leftOfLeft = new Vertex("LEFT LEFT")
 randy.setForwardVertex(candis) 
 randy.setbackVertex(third)
 randy.setUpVertex(sky) 
 randy.setUpVertex(skyHigh) 
 randy.setRightVertex(right) 
 randy.setRightVertex(rightOfRight) 
randy.setLeftVertex(leftOfVertex) 
randy.setLeftVertex(leftOfLeft)
 console.log(randy)