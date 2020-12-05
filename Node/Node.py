class Graph: 
    def __init__(self, name, matrix): 
        self.name = name, 
        self.matrix = matrix

    def show_matrix(self): 
        print(self.matrix) 


class Node: 
    def __init__(self, data): 
        self.data = data, 
    def who_am_i(self): 
        print(self.data)



# randy = Node("Randy") 
# candis = Node("Candis") 
# graph = Graph("graph",  [ [0,1],[1,0]] ) 
# graph.show_matrix()