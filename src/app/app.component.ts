import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LngLinks } from './data/links';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppOne';
  links = LngLinks();
}
