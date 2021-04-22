package com.peteangjelevski.todoapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peteangjelevski.todoapp.domain.TodoItem;
import com.peteangjelevski.todoapp.repository.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepo;
	
	public List<TodoItem> fetchAllTodoItems () {
		return todoRepo.fetchAllTodoItems();
	}
}