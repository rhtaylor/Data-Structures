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
        
    def get_next_node(self): 
        return self.next 
    def set_next_node(self, node):
            
            current = self
             
            while(current.next is not None): 
                     
                     current = current.get_next_node() 
                     
            current.next = node 
                   
    

building1 = Node("address 101") 
building2 = Node("address 202")
building3 = Node("address 303")
building1.set_next_node(building2) 
building1.set_next_node(building3) 
print(building1.next.next.data)

 
#print(building1.next.data)
# graph = Graph("Vertex", [[]]) 
# graph.set_up_vertex(building1)