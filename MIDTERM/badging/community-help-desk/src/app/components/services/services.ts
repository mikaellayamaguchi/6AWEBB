import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})

export class ServicesComponent {
  private dataService = inject(DataService);
  searchControl = new FormControl('');

  filteredPosts$ = combineLatest([
    this.dataService.posts$,
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([posts, term]) =>
      posts.filter(p => p.title.toLowerCase().includes(term?.toLowerCase() || ''))
    )
  );

  showDetails(post: any) {
    alert(`Service ID: ${post.id}\n\nFull Description:\n${post.body}`);
  }
}
