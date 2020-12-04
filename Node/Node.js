class Node{
    constructor(data){
        this.data = data; 
        this.next = null; 
    } 
    getNextNode(){
        return this.next; 
    } 
    setNextNode(node){
        if( node instanceof Node){ 
            let current = this; 
            let next = this.getNextNode(); 
            while(!next === null){
                current = current.getNextNode(); 
            } current.next = node; 
        }
    }
} 

