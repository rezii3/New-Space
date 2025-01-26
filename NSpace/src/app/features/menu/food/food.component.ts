import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  standalone: false,
  
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  allCards = [
    { category: 'dishes', text: 'სტეიკი', image: 'dishes1.jpg' },
    { category: 'dishes', text: 'დესერტი', image: 'dishes2.jpg' },
    { category: 'cocktails', text: 'მოჰიტო', image: 'cocktail1.jpg' },
    { category: 'cocktails', text: 'მარგარიტა', image: 'cocktail2.jpg' },
    { category: 'wines', text: 'წითელი ღვინო', image: 'wine1.jpg' },
    { category: 'wines', text: 'თეთრი ღვინო', image: 'wine2.jpg' },
  ];

  currentCards = this.allCards;

  loadCards(category: string) {
    if (category === 'all') {
      this.currentCards = this.allCards;
    } else {
      this.currentCards = this.allCards.filter(card => card.category === category);
    }
  }
  
}
