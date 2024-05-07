import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TitleComponent,
    CategoriesComponent,
  ],
})
export class AppComponent {
  title = 'path';
}
