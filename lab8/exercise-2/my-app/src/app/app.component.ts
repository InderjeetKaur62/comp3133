import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RemoveSpacesPipe,
    InputFormatDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Hero App';

  heroes = [
    { id: 1, name: 'Dr-Nice' },
    { id: 2, name: 'Bombasto-Blaster' },
    { id: 3, name: 'Celeritas-Speed' },
    { id: 4, name: 'Magneta-Violet' },
    { id: 5, name: 'Narco-Kid' }
  ];
}
