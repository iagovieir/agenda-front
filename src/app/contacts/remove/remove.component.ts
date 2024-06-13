import { Component } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrl: './remove.component.scss'
})
export class RemoveComponent {

  Form = new FormGroup ({
    id: new FormControl(),
    name: new FormControl(''),
    number: new FormControl(''),
  });

  constructor( private service:ContactsService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params: any)=>{
      const id = params['id'];
      console.log(id)
      const contacts = this.service.loadbyId(id).subscribe(contacts=>{
        this.updateForm(contacts)
      })
     });
  }

  updateForm(contacts: any){
    this.Form.patchValue({
      id: contacts.id,
      name: contacts.name,
      number: contacts.number,
    })
  }

  onDelete(){
    this.service.remove(this.Form.value.id).subscribe(contacts=>{
      console.log(contacts);
      this.router.navigate([''])
    })
  }

  onCancel(){
    console.log('saiu do form');
    this.router.navigate(['']);

  }
}
