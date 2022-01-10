import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todolist';
import { TodoItemsService } from 'src/app/services/todoitems.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent implements OnInit {
  public items?: TodoItem[];
  public newItem: TodoItem = {
    id : 0,
    name: '',
    isComplete: false    
  };

  ngOnInit(): void {
    this.fetchList();
  }
  
  constructor(private todoService : TodoItemsService) {}  

  onSubmit(): void {
    this.todoService.add(this.newItem).subscribe((res) => {
      alert('Added ' + res.name);
    });
    this.fetchList();
  }

  private fetchList() {
    this.todoService.getAll().subscribe(res => { this.items = res });
  }
}

