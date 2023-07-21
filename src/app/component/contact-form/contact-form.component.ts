import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData: any = {}; // Object to store form data

  submitForm() {
    const subject = 'Contact Form Submission';
    const body = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`;

    // Set the recipient email address to satellites-child@jn2cwnto.mailosaur.net
    const recipientEmail = 'satellites-child@jn2cwnto.mailosaur.net';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    
  }
}
