package main

import (
	"fmt"
	"html/template"
	"net/http"
)

// Initialization _____________________________________________________________

var templat *template.Template

func init() {
	templat = template.Must(template.ParseGlob("templates/*"))
}

// Main _______________________________________________________________________

func main() {

	http.HandleFunc("/", index)
	http.HandleFunc("/contabilidad", accountResume)
	http.HandleFunc("/nidos", nests)
	http.HandleFunc("/transacciones", transactions)

	port := ":8070"
	fmt.Println("Listening and Serving at port", port)
	http.ListenAndServe(port, nil)
}
