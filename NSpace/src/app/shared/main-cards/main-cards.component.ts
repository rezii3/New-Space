import { Component } from '@angular/core';

@Component({
  selector: 'app-main-cards',
  standalone: false,

  templateUrl: './main-cards.component.html',
  styleUrl: './main-cards.component.scss'
})
export class MainCardsComponent {
  Img = [
    {src: 'assets/photos/koktaile.jpg', text: 'მენიუ',desc: 'ნიუ სფეისი არის კაფე-რესტორანი, სივრცე კომფორტული.'},
    { src: 'assets/photos/IMG_4654.JPG', text: 'გარე სივრცე',desc: 'ნიუ სფეისი არის კაფე-რესტორანი, სივრცე კომფორტული.' },
    { src: 'assets/photos/IMG_9995 (1).jpg', text: 'გარე სივრცე',desc: 'ნიუ სფეისი არის კაფე-რესტორანი, სივრცე კომფორტული.' }
  ];
}
