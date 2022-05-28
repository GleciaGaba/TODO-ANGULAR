import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() item!: Item;
  @Input() filter!: String;
  @Output() itemChange = new EventEmitter();
  @Output() itemDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectCheckBox(item: Item) {
    this.itemChange.emit(item);
  }

  deleteItem(item: Item) {
    this.itemDelete.emit(item);
  }
}