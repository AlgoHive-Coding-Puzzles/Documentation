namespace AlgoHive
{
    class Program
    {
        static void Main(string[] args)
        {
            // Read the file
            string input = readFile();
            // Split the input
            string[] inputSplit = splitInput(input);

            // Process the input
            int solution = 0;
            
            /**
            * Your code logic goes here
            */

            // Print the solution
            Console.WriteLine(solution);
        }

        public static string readFile() {
            // Get the path of the current directory
            string path = System.IO.Directory.GetCurrentDirectory();
            // Get the path of the file
            string filePath = System.IO.Path.Combine(path, "input.txt");
            // Read the file and return the content
            return System.IO.File.ReadAllText(path + "/input.txt");
        }

        public static string[] splitInput(string input) {
            // Split the input by new line
            return input.Split(new string[] { Environment.NewLine }, StringSplitOptions.None);
        }
    }

}