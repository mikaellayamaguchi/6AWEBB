import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  // Original fields
  username = '';
  email = '';
  password = '';
  role = '';

  // Newly requested fields
  gender = '';
  status = '';
  comments = '';

  submitted = false;

  onSubmit() {
  this.submitted = true; // This triggers the display section in the HTML
  console.log("Form Data:", {
    username: this.username,
    email: this.email,
    password: this.password,
    role: this.role,
    gender: this.gender,
    status: this.status,
    comments: this.comments
  });
}
}
