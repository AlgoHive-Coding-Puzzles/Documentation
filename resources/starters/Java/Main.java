import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        String data = "";
        try {
            data = new String(Files.readAllBytes(Paths.get("input")));
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        // Split the data into an array of strings by newlines
        ArrayList<String> lines = new ArrayList<String>();
        for (String line : data.split("\\r?\\n")) {
            lines.add(line);
        }

        int solution = 0;
    
        /**
         * Your code logic goes here
         */

        System.out.println("Solution: " + solution);
    }
}