import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  // Dynamic properties for title, description, and form values
  title: string = 'Join Us and Become a Part of Our Conference Community';
  description: string = 'Fill out the form below to register for our upcoming events and get the latest updates!';

  firstName: string = '';
  email: string = '';

  // Method to handle form submission
  onSubmit() {
    if (this.firstName && this.email) {
      alert(`Thank you, ${this.firstName}! We’ve sent a confirmation to ${this.email}.`);
    } else {
      alert('Please fill out both fields before submitting.');
    }
  }
}
