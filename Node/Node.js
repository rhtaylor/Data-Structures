class Vertex{
    constructor(data){
        this.data = data; 
        this.adjacent = null; 
    } 
    getNextVertex(){
        return this.adjacent; 
    } 
    setNextVertex(vertex){ 
        let current = this; 
        let nextV = this.adjacent; 
        if(vertex instanceof Vertex){ 
            if(!nextV){ 
                this.adjacent = vertex; 
            } else{ 
                while(!nextV === null){  
                current = current.getNextVertex(); 
                nextV = current.adjacent 
                } 
               nextV.adjacent = vertex } 
            } }
    }
 


