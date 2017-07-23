package main

import "net/http"

func accountResume(w http.ResponseWriter, r *http.Request) {
	templat.ExecuteTemplate(w, "account_resume.gohtml", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	templat.ExecuteTemplate(w, "index.gohtml", nil)
}

func nests(w http.ResponseWriter, r *http.Request) {
	templat.ExecuteTemplate(w, "nests.gohtml", nil)
}

func transactions(w http.ResponseWriter, r *http.Request) {
	templat.ExecuteTemplate(w, "transactions.gohtml", nil)
}
