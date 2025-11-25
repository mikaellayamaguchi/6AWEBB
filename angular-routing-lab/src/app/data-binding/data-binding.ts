import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration'; // text interpolation
  imageUrl = 'https://media.tenor.com/OU7qmzXIFBcAAAAe/bubu-dudu.png';
  w = 150;
  h = 150;
  altText = 'cute bubu';

  textColor = 'blue';

  isHighlighted = true;

  yourName = '';

  count=0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  studentName = 'Mika Yamaguchi';
  score = 95;

  imageUrl1 = 'https://picsum.photos/200';
  isDisabled = true;

  colSpanValue = 3;

  isPassing = true;

  boxColor = 'purple';
  boxSize = '150px';
}
