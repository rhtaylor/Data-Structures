class Coordinate{
    constructor(){
        this.matrix = 
        {forward: [],  
        back: [], 
        up: [], 
        down: [], 
        left: [], 
        right: []
        }
    } 
    static addVertex(vertex, dir){
        if(vertex instanceof Vertex){ 
            return this.matrix[dir]
        }
    } 

} 

