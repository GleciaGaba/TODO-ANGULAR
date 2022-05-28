import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from 'src/app/component/form/form.component';
import { LocalStorage } from 'src/app/model/localstorage';
import { TodoListComponent } from 'src/app/component/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }