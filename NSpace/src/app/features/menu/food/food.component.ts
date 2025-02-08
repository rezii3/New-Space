import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  standalone: false,
  
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  selectedCategory: string = ''; // შერჩეული კატეგორიის ცვლადი

  allCards = [
    { category: 'dishes', text: 'სტეიკი', image: '../../../../assets/photos/koktaile.jpg' },
    { category: 'dishes', text: 'დესერტი', image: '../../../../assets/photos/koktaile.jpg' },
    { category: 'cocktails', text: 'მოჰიტო', image: '../../../../assets/photos/koktaile.jpg' },
    { category: 'cocktails', text: 'მარგარიტა', image: '../../../../assets/photos/koktaile.jpg' },
    { category: 'wines', text: 'წითელი ღვინო', image: '../../../../assets/photos/koktaile.jpg' },
    { category: 'wines', text: 'თეთრი ღვინო', image: '../../../../assets/photos/koktaile.jpg' },
  ];

  currentCards = this.allCards;

  loadCards(category: string) {
    this.selectedCategory = category; // ვცვლით active კატეგორიას
    this.currentCards = this.allCards.filter(card => card.category === category);
  }
  
}
