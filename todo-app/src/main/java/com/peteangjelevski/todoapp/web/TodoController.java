package com.peteangjelevski.todoapp.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
	
	@GetMapping("/api/v1/todoItems")
	public ResponseEntity<?> fetchAllTodoItems () {
		
	}

}
