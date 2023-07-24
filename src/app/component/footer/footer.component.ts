import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer', // The component selector used in the HTML template
  templateUrl: './footer.component.html', // The path to the HTML template file for this component
  styleUrls: ['./footer.component.css'] // The array of CSS stylesheets for this component
})
export class FooterComponent {
  showFooter: boolean = false; // Boolean variable to control the visibility of the footer, initially set to false

  // HostListener decorator that listens for the 'window:scroll' event
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Check if the bottom of the viewport has reached the bottom of the document body
    this.showFooter = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
}
