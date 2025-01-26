import { Component } from '@angular/core';

@Component({
  selector: 'app-carusel',
  standalone: false,

  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.scss'
})
export class CaruselComponent {
  Img = [
    { src: 'assets/photos/auz.jpg', text: 'ეს არის პირველი სურათი' },
    { src: 'assets/photos/IMG_4654.JPG', text: 'ეს არის მეორე სურათი' },
    { src: 'assets/photos/IMG_0046.jpg', text: 'ეს არის მესამე სურათი' },
  ];
  effect = 'scrollx';
}
