class Graph: 
    def __init__(self, name, matrix): 
        self.name = name, 
        self.matrix = matrix

    def show_matrix(self): 
        print(self.matrix) 
    def set_up_vertex(self, vertex):
        print(isinstance(vertex, Node))


class Node: 
    def __init__(self, data): 
        self.data = data 
        self.next = None  
        self.pre = None 
        self.up = None 
        self.down = None
    def get_next_node(self): 
        return self.next 
    def set_next_node(self, node):
            
            current = self
             
            while(current.next is not None): 
                     
                     current = current.get_next_node() 
                     
            current.next = node 
    def get_pre_node(self): 
        return self.pre 
    def set_pre_node(self, node): 
        current = self 
        while(current.pre is not None): 
               
              current = current.get_pre_node()               
        if (isinstance(node, Node)): 
            
            current.pre = node
        else: 
            print("ERR") 
    def get_up_node(self): 
        return self.up 
    def set_up_node(self, node): 
        current = self 
        while(current.up is not None): 
            current = current.get_up_node()
        if(isinstance(node, Node)): 
            current.up = node 
    def get_down_node(self): 
        return self.down 
    def set_down_node(self, node): 
        current = self 
        while(current.down is not None): 
             current = current.get_down_node() 
        if(isinstance(node, Node)): 
            current.down = node

building1 = Node("address 101") 
building2 = Node("address 202")
building3 = Node("address 303") 
building0 = Node("address 50") 
buildingNeg = Node("address -1")
buildingPent = Node("address sky")
building1.set_next_node(building2) 
building1.set_next_node(building3) 
building1.set_pre_node(building0) 
building1.set_pre_node(buildingNeg) 
building1.set_up_node(buildingPent) 
print(building1.get_up_node().data) 
buildingBasement = Node("address subGround") 
building1.set_down_node(buildingBasement) 
print(building1.down.data)

#print(building1.next.data)
# graph = Graph("Vertex", [[]]) 
# graph.set_up_vertex(building1)