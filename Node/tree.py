class BinaryTree:
    def __init__(self, data=None):
        self.parent = None
        self.data = None
        self.left = None
        self.right = None

    def set_parent(self, data):
        self.parent = BinaryTree()
        self.parent.data = data
        return f'parent tree set to #{self.parent.data}'

    def add_data(self, data):
        return self
