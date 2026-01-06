import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']  // Add your CSS file here
})
export class PartnersComponent {
  title = 'Our Trusted Partners';
  description = 'These companies help make our vision a reality.';

  // Partner data with online logos
  partners = [
    { name: 'Amazon', industry: 'Cloud Computing', logo: 'https://m.media-amazon.com/images/I/31epF-8N9LL.png' },
    { name: 'Boston Dynamics', industry: 'Robotics', logo: 'https://logowik.com/content/uploads/images/boston-dynamics4367.jpg' },
    { name: 'Gamma Cyber', industry: 'Security', logo: 'https://www.gcu.ac.uk/__data/assets/image/0027/208971/Gammaland.png' },
    { name: 'Delta Solutions', industry: 'Software Development', logo: 'https://cdn.dribbble.com/userupload/41717118/file/original-00cf8e9259dad9741ed24498f45b55a9.png?resize=400x300' }
  ];
}
