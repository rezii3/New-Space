import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-space-info',
  standalone: false,
  
  templateUrl: './space-info.component.html',
  styleUrl: './space-info.component.scss'
})
export class SpaceInfoComponent {
  @Input() title!: string; // ტექსტის სათაური
  @Input() description!: string; // ტექსტი აღწერისთვის
  @Input() imageSrc!: string; // სურათის ბმული
}
