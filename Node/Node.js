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
    //gets forward vertex
    getForwardVertex(){
        return this.forward; 
    } 
    //sets forward vertex
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
    //gets back vertex
    getbackVertex(){
        return this.back
    }
    //sets back vertex
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
    //gets up vertex
    getUpVertex(){
        return this.up
    }
    //sets up vertex
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
    //gets down vertex 
    getDownVertex(){
        return this.down
    }  
    //sets down vertex
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

        //gets right vertex
        getRightVertex(){
        return this.right
    } 
        //sets right vertex     
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
        //gets left vertex
    getLeftVertex(){
            return this.left
        } 
        //sets vertex left of current
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
    getArgVertex(dir){ 
        return this[dir]
    } 
    setArgVertex(vertex,dir){ 
        if(vertex instanceof Vertex){
            let current = this  
            if (current[dir] === null){ 
                //this is if the list is empty 
                return this[dir] = vertex
            }
            
            let dirVertex = current[dir];  
           
            while(dirVertex !== null && dirVertex[dir] !==null){ 
                dirVertex = dirVertex[dir]; 
               } 
            
            dirVertex[dir] = vertex
        
    }
}
}


 let randy = new Vertex("Randy"); 
//  let candis = new Vertex("Candis");
//  let third = new Vertex("Lady friend");
//  let sky = new Vertex("flying") 
//  let skyHigh = new Vertex("SUPER HIGH")
//  let right = new Vertex("On your Right")  
// randy.setbackVertex(candis)
// let random = new Vertex("Random back") 
// let ramdom = new Vertex("BUT AERE YOU RANDOME???")
// randy.setArgVertex(random, "back")  
// randy.setArgVertex(ramdom, "back")

//  console.log(randy) 

class Coordinate {
    constructor() {
        this.head = null 
        this.vertices = [] 
        this.matrix =
        {
            forward: [],
            back: [],
            up: [],
            down: [],
            left: [],
            right: []
        }
    } 
    getHead(){
        return this.head
    }
    addNewHead(data, dir){
        let newHead = new Vertex(data); 
        let currentHead = this.head; 
        newHead.setArgVertex(currentHead, dir); 
        this.head = newHead
    } 

     addVertexInDir(data, dir) { 
         
         let newVertex = new Vertex(data) 
         
        if (newVertex instanceof Vertex) { 
            this.head.setArgVertex(newVertex, dir)
            this.matrix[dir].push(1); 
            this.vertices[data] = newVertex 
        } 
        
    }
    print(){
        console.log(this.head)
    } 
    clear(){
        return this.head = null
    } 
    countInDir(dir){
        let count = 0; 
        let node = this.head; 
       
        while(node){ 
            ++count;  
            node = node[dir] 
        } 
        return count
    } 
    countAllDir(){
        const directions = ["forward", "back", "up", "down", "left", "right"] 
        let count = 0 
        let node = this.head
        directions.map(way =>{ if(node[way] !== null || node[way] !== undefined){ 
            ++count 
            node = node[way]
        }} ) 
        console.log(count) 
        return count
    } 
    printVertices(){ 
        let keys = Object.keys(this.vertices) 
        let head = "<head> "
        keys.map(key => {
            return head += this.vertices[key].data + " ";
        } )  
        head += " <tail>"   
        console.log(head)
    }

}   


let c = new Coordinate(); 
c.addNewHead("Randy", "up") 
c.addVertexInDir("Randy", "forward"); 
c.addVertexInDir("CANDIS", "forward");
c.printVertices()
// c.addNewHead("Randy", "forward") 
// c.addNewHead("Candis", "forward")  
// c.addNewHead("YOLO", "forward") 
// c.addNewHead("DUDE", "back") 
// c.addNewHead("WOW", "up")

// c.print() 
// let x = c.countAllDir() 
// console.log(x)