import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() textForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myform: NgForm) {
    this.textForm.emit(myform.value.description);
    myform.reset();
  }
}
