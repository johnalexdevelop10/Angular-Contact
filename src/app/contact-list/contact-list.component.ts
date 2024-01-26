import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../model/contact.interface';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export default class ContactListComponent implements OnInit {
  private contactService = inject(ContactService);//inteccion en angular

  contacts: Contact[] = [];//para crear atributos


ngOnInit(): void {//es un callback
  this.loadAll();
}

loadAll(){
  this.contactService.list()
   .subscribe(contacts=>{
    this.contacts = contacts;
   })
}

deleteContact(contact:Contact){//le pasamos parametros contact de tipo Contact
  this.contactService.delete(contact.id)

   .subscribe(()=>{
    //this.contactService.list()
    //.subscribe(contacts=>{
      this.loadAll();
     })
   }

}



//oninit = interface para q muestre los compont
