import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,
  
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() cards: any[] = [];
}
