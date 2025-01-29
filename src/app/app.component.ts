import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './components/global/index/index.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [
    IndexComponent,
    MatGridListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UI';
}
