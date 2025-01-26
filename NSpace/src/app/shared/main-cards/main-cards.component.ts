import { Component } from '@angular/core';

@Component({
  selector: 'app-main-cards',
  standalone: false,

  templateUrl: './main-cards.component.html',
  styleUrl: './main-cards.component.scss'
})
export class MainCardsComponent {
  Img = [
    {src: 'assets/photos/koktaile.jpg', text: 'მენიუ'},
    { src: 'assets/photos/IMG_4654.JPG', text: 'გარე სივრცე' },
    { src: 'assets/photos/IMG_0046.jpg', text: 'შიდა სივრცე' }
  ];
}
