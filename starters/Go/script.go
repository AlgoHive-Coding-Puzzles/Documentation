package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// Read input file
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	// Read lines
	var lines []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, strings.TrimSpace(scanner.Text()))
	}
	if err := scanner.Err(); err != nil {
		fmt.Println("Error reading file:", err)
		return
	}

	var solution interface{} = nil

	/**
	 * Implement the solution here
	 */

	fmt.Println(solution)
}
