import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, CommonModule]
})
export class HomeComponent {
  
  constructor(private router: Router) { }
  state = { postId: 6 };
  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Nokia' }
  ];

  navigateByUrl() {
    this.router.navigateByUrl('/contact');
  }
  navigateToPost() {
    this.router.navigate(['/details'], { state: this.state });
  }
}
