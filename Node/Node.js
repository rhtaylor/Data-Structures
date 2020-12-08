class Vertex{
    constructor(data){
        this.data = data; 
        this.next = null; 
        this.pre = null; 
        this.up = null; 
        this.down = null;   
    } 
    getNextVertex(){
        return this.next; 
    } 
    setNextVertex(vertex){ 
        let current = this; 
        let nextV = this.next; 
        if(vertex instanceof Vertex){ 
            if(!nextV){ 
                this.next = vertex; 
            } else{ 
                while(!nextV === null){  
                current = current.getNextVertex(); 
                nextV = current.next 
                } 
               nextV.next = vertex } 
            } }
    getPreVertex(){
        return this.pre
    }
    
    setPreVertex(vertex){
        if(vertex instanceof Vertex){
            let current = this; 
            let preVertex = current.pre; 
                while(preVertex){ 
                
                current = current.getPreVertex(); 
                preVertex = current.pre
                } 
            
             current.pre = vertex
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
        }
 


 let randy = new Vertex("Randy"); 
 let candis = new Vertex("Candis");
 let third = new Vertex("Lady friend");
 let sky = new Vertex("flying") 
 let skyHigh = new Vertex("SUPER HIGH")
 randy.setNextVertex(candis) 
 randy.setPreVertex(third)
 
 randy.setUpVertex(sky) 
 randy.setUpVertex(skyHigh) 
 console.log(randy)