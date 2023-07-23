// Importing necessary modules and decorators from Angular core
import { Component } from '@angular/core';

// Component decorator that provides metadata for the component
@Component({
  selector: 'app-contact-form', // The component selector used in the HTML template
  templateUrl: './contact-form.component.html', // The path to the HTML template file for this component
  styleUrls: ['./contact-form.component.css'] // The array of CSS stylesheets for this component
})
export class ContactFormComponent {
  formData: any = {}; // Object to store form data

  // This function is called when the form is submitted
  submitForm() {
    // Subject and body for the email
    const subject = 'Contact Form Submission';
    const body = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`;

    // Set the recipient email address to satellites-child@jn2cwnto.mailosaur.net
    const recipientEmail = 'satellites-child@jn2cwnto.mailosaur.net';
    
    // Construct the mailto link with the subject, body, and recipient email
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect the user to the mailto link, triggering the default email client with the pre-filled form data
    window.location.href = mailtoLink;
  }
}
