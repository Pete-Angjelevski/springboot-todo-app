package com.peteangjelevski.todoapp.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PutMapping("/api/v1/todoItems/{id}")
	public ResponseEntity<?> updateTodoItem(@PathVariable Integer id, @RequestBody TodoItem body) {
		
		TodoItem updatedTodoItem = todoService.updateTodoItem(id, body);
		
		return ResponseEntity.ok(updatedTodoItem);
	}

}
