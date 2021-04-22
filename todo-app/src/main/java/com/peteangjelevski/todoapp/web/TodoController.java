package com.peteangjelevski.todoapp.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peteangjelevski.todoapp.domain.TodoItem;
import com.peteangjelevski.todoapp.service.TodoService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/api/v1/todoItems")
	public ResponseEntity<?> fetchAllTodoItems () {
		List<TodoItem> todoItems = todoService.fetchAllTodoItems();
		
		return ResponseEntity.ok(todoItems);
	}

}
