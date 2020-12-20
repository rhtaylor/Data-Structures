class Node{
    constructor(id, data){  
        this.id = id
        this.data = data, 
        this.connections = [] 
    } 
    
    addConnection(id){
        this.connections.push(id)
    }
}  


class Graph{
    constructor(){
        this.edges = [], 
        this.nodes = []
    } 
    addToGraph(id, data){ 
        let newNode = new Node(id, data)
        this.nodes.push(newNode)
    } 


    findNodeById(id) {
        let found = this.nodes.filter(node => {
            if (node.id === id) {
                return node
            }
        })
        return found[0]
    }
    addConnectionToNodes(node1Id, node2Id){ 
        let node1 = this.findNodeById(node1Id) 
        let node2 = this.findNodeById(node2Id)
        node1.addConnection(node2) 
        node2.addConnection(node1) 
        this.edges.push(`${node1.id} ${node2.id}`) 
        return this.edges

    }   

    editDataById(id, newData){ 
        let editMe = this.findNodeById(id) 
        editMe.data = newData 
        return "HTTP 204"
    } 
    deleteById(id){ 
     let filteredArray = this.nodes.filter(node =>( node.id !== id)) 
     this.nodes = filteredArray
      
    }
    printGraph(){ 
        console.log(this.edges)
    }
} 



let newNode = new Node(1, "address 101")  
let nextNode = new Node(2, "address 103")
let town = new Graph();
town.addToGraph(100, "address 100")  
town.addToGraph(101, "address 101") 
town.addToGraph(102, "address 102") 
town.addToGraph(103, "address 103") 
town.addConnectionToNodes(101, 103) 
town.addConnectionToNodes(100,102) 
town.printGraph() 





//console.log("before", town.findNodeById(101))
//console.log(town.editDataById(101, "address infinity")) 
//console.log("after", town.findNodeById(101)); 
//console.log(town.findNodeById(101))
//console.log(town)

