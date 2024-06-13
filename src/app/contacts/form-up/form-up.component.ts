import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from '../shared/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-up',
  templateUrl: './form-up.component.html',
  styleUrl: './form-up.component.scss'
})
export class FormUpComponent {

  id = Math.random()

  Form = new FormGroup ({
    id: new FormControl(`${this.id * 10}`),
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

  onSubmitUp(){
    this.service.update(this.Form.value).subscribe(constacts =>{
      console.log(constacts)
      this.router.navigate([''])
    })
  }

  onCancel(){
    console.log('você cancelou o form')
  }

  onDelete(){
    
  }


}
