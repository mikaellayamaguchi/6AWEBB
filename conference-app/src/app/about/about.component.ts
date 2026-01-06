import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink], // Added RouterLink so the button works
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'About the Organization';
  bannerDescription = 'Learn how the team and committee leadership are shaping the world of conferences, get the latest conference news and updates on our blog, and contact us for guidance.';
  aboutHeading = 'Our Mission';
  aboutDescription = 'We believe in transparency, cooperation globally, and the free exchange of talent and ideas. A forum for the sharing of these technical and humanitarian discussions is given for meetings, conferences, and other events.';
  aboutDetails = 'Conferences are part of the legacy of this organization and continue today to be a catalyst for creativity.';

  // Using a high-quality tech/city image from Unsplash
  bannerImage = 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop';

  onRegisterInterest() {
    alert('Thank you for your interest! A brochure has been sent to your email.');
  }
}
