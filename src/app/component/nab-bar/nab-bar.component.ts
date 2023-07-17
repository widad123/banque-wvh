import { Component } from '@angular/core';

@Component({
  selector: 'app-nab-bar',
  templateUrl: './nab-bar.component.html',
  styleUrls: ['./nab-bar.component.css']
})
export class NabBarComponent {
  showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    }
  }
}
