import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showFooter: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.showFooter = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
}
