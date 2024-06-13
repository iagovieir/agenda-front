import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private readonly API = 'http://localhost:3000/contats'

  constructor(private http: HttpClient) { }

  listContacts(){
    return this.http.get<Contacts[]>(this.API)
  }

  loadbyId(id: any){
    return this.http.get(`${this.API}/${id}`).pipe(take(1))
  }

  create(contacts: any){
    return this.http.post(this.API, contacts).pipe(take(1))
  }

  update(curso: any){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1))
  }

  remove(id: any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }

}
