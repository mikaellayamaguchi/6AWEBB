import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Products, Product } from './products';

interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('angular-share-data');

  public employees: Employee[] = [
    { id: 101, firstname: 'Joseph', lastname: 'Dizon', email: 'jdizon@hau.edu.ph' },
    { id: 102, firstname: 'James', lastname: 'Atienza', email: 'jatienza@hau.edu.ph' },
    { id: 103, firstname: 'John', lastname: 'Cena', email: 'jcena@hau.edu.ph' },
    { id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@hau.edu.ph' },
    { id: 105, firstname: 'Mika', lastname: 'Yamaguchi', email: 'msyamaguchi1@hau.edu.ph' },
  ];

  public products: Product[] = [];

  constructor(private _productsService: Products) {}

  ngOnInit(): void {
    this.products = this._productsService.getProducts();
  }
}
