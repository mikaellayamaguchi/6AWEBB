import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Research Conferences';
  subtitle = 'Join our online events this 2026!';
  headerImage = 'https://static.vecteezy.com/system/resources/thumbnails/008/020/629/small/banner-web-template-abstract-blue-and-golden-curved-lines-overlapping-layer-design-on-dark-blue-background-luxury-style-vector.jpg';

  conferences = [
    {
      city: 'France',
      description: 'The largest country in Western Europe, has long been a gateway between the northern and southern regions.',
      category: 'Architecture and Fine Arts',
      image: 'https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower_4x3.jpg'
    },
    {
      city: 'Seoul',
      description: 'Korean Soul (formally Soul-tukpyste), Special City of South Korea, and the capital of the Republic of Korea.',
      category: 'Humanities and Arts',
      image: 'https://media.istockphoto.com/id/464629385/photo/seoul-skyline.jpg?s=612x612&w=0&k=20&c=Wo9LYxk6L9z0VORPkMxjubMcAZfWAJtRJWVfiJR8jmw='
    },
    {
      city: 'San Francisco',
      description: 'A cultural and financial center of the western United States and one of the country’s most cosmopolitan cities.',
      category: 'Science and Technology',
      image: 'https://t3.ftcdn.net/jpg/02/09/50/92/360_F_209509249_El7Kup1kzjdFiWa0ioGzbpVO3SaqMFQR.jpg'
    },
    {
      city: 'Boston',
      description: 'Best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course for the bar from Cheers.',
      category: 'Engineering and Tech',
      image: 'https://media.istockphoto.com/id/1407903532/photo/boston-massachusetts.jpg?s=612x612&w=0&k=20&c=r7w6y8E4NDznDkF4dfVtN6oLwccD7GDcy71RDOfsv-A='
    }
  ];
}
