import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private dataService = inject(DataService);

  // Use RxJS map to get only the first 5 records
  latestPosts$ = this.dataService.posts$.pipe(
    map(posts => posts.slice(0, 5))
  );
}
