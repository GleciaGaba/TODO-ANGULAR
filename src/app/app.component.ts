import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { LocalStorage } from 'src/app/model/localstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-todo-FormsModule';

  public allItems: Item[] = [];
  public n: number = 0;

  constructor(private storage: LocalStorage) { }

  ngOnInit(): void {
    if (this.storage.get("allItems")) {
      this.allItems = this.storage.get("allItems");
      this.n = [...this.allItems.filter((el: { done: boolean; }) => el.done == true)].length;
    }
  }

  onSubmitParent(event: string) {
    this.allItems.push({
      description: event,
      done: false
    });
    this.storage.set('allItems', this.allItems);
  }

  selectCheckBoxParent(item: Item) {
    item.done = !item.done;
    item.done ? this.n++ : this.n--;
    this.storage.set("allItems", this.allItems);
  }

  deleteItemParent(item: Item) {
    this.allItems = this.allItems.filter(function (el: Item) { return el != item });
    this.n--;
    this.storage.set("allItems", this.allItems);
  }

  deleteAllDoneItem() {
    this.allItems = this.allItems.filter(function (el: { done: boolean; }) { return el.done != true });
    this.n = 0;
    this.storage.set("allItems", this.allItems);
  }

}
