import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Votre message a bien été envoyé !');
  }
}