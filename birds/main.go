package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

// Initialization _____________________________________________________________

var templat *template.Template

func init() {
	templat = template.Must(template.ParseGlob("templates/*"))
}

// Main _______________________________________________________________________

func main() {

	// TODO: file serving, there is just .gohtml, lacking Javascript
	http.HandleFunc("/", index)
	http.HandleFunc("/contabilidad", accountResume)
	http.HandleFunc("/nidos", nests)
	http.HandleFunc("/transacciones", transactions)

	port := ":8070"
	fmt.Println("Listening and Serving at port", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Println("LAS error:", err)
	}
}
