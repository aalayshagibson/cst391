import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class InfoComponent implements OnInit {

  @Input() name: string = '';

  quantity: string = '';
  products: string[] = [];
  selectedProduct: string = '';

  ngOnInit(): void {
    this.quantity = '1';

    this.products = [
      'iPhone 13 Pro',
      'iPhone 14',
      'iPhone 14 Pro',
      'iPhone 15',
      'iPhone 15 Pro',
      'iPhone 15 Pro Max'
    ];

    this.selectedProduct = this.products[0];
  }

  onSubmit() {
    console.log("Order Placed:");
    console.log("Customer:", this.name);
    console.log("Product:", this.selectedProduct);
    console.log("Quantity:", this.quantity);
  }

  newInfo() {
    this.quantity = '1';
    this.selectedProduct = this.products[0];
    console.log("Form reset");
  }
}