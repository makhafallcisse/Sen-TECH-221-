import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
   onSubmit(event: Event){
    event.preventDefault();
    alert('Votre message est envoye avec succes !');
  }
}
