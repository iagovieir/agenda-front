import { Route, Router } from '@angular/router';
import { Contacts } from '../shared/contacts';
import { ContactsService} from './../shared/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent implements OnInit{

  contacts:Contacts[] = [];

  constructor( private ContactsService: ContactsService, router: Router){}


  ngOnInit(): void{
    this.ContactsService.listContacts().subscribe(contacts =>{
      this.contacts = contacts;
    })
  }

}
