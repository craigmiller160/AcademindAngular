import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  defaultQuestion = 'pet';
  answer: string;

  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName(): void {
    const suggestedName = 'Superuser';
  }

  onSubmit(): void {
    console.log('Submitted');
    console.log(this.form);
  }

}
