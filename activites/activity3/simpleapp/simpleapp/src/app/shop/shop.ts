import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info/info';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InfoComponent],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class ShopComponent {

  question: string = "What’s your name?";
  answer: string = "unknown";

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  onSubmit(formValue: any) {
    this.answer = formValue.answer;
    console.log("Name entered:", this.answer);
  }
}