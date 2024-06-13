import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsFormComponent } from './contacts/contacts-form/contacts-form.component';
import { FormUpComponent } from './contacts/form-up/form-up.component';
import { RemoveComponent } from './contacts/remove/remove.component';


const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'new', component: ContactsFormComponent },
  { path: 'edit/:id', component: FormUpComponent },
  { path: 'remove/:id', component: RemoveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
