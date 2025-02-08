import { Component } from '@angular/core';

@Component({
  selector: 'app-main-cards',
  standalone: false,

  templateUrl: './main-cards.component.html',
  styleUrl: './main-cards.component.scss'
})
export class MainCardsComponent {
  Img = [
    {src: 'assets/photos/IMG_9924.jpg', text: 'ქორწილი',desc: 'თუკი ქორწილს გეგმავთ ნიუ სფეისი სწორედ შენთვისაა...'},
    { src: 'assets/photos/IMG_4654.JPG', text: 'დაბადებისდღე',desc: 'თუკი დაბადებისდღის აღნიშვნას გეგმავთ ნიუ სფეისი...' },
    { src: 'assets/photos/IMG_9995 (1).jpg', text: 'ბოლოზარი|ბანკეტი',desc: 'თუკი ბოლო ზარის ან ბანკეტის აღნიშვნას გეგმავთ ნიუ სფეისი...' }
  ];
}
