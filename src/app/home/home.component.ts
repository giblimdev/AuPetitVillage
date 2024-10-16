import { Component } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ArticlesComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
