import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { HomeComponent } from './home/home.component';
import { BinComponent } from './bin/bin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeNotebooksComponent } from './home-notebooks/home-notebooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotebooksComponent, HomeComponent, BinComponent, RouterModule, NavigationComponent, HomeNotebooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'note-app';
}
