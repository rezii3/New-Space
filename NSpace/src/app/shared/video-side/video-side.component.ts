import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-video-side',
  standalone: false,
  
  templateUrl: './video-side.component.html',
  styleUrl: './video-side.component.scss'
})
export class VideoSideComponent {
  offset = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // პარალაქსის ეფექტის სიჩქარე (0.5 = ნელი მოძრაობა)
    this.offset = window.scrollY * 0.5;
  }
}
