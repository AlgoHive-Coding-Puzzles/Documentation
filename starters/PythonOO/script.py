class Decrypt:
    def __init__(self, lines: list):
        self.lines = lines
        
    def run(self):
        """
        Implement the solution here
        """
        pass
    
if __name__ == '__main__':
    with open('input.txt') as f:
        lines = f.readlines()
    # Clean the lines
    lines = [line.strip() for line in lines]
    decrypt = Decrypt(lines)
    solution = decrypt.run()
    print(solution)
    
    