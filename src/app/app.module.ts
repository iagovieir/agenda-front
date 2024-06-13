import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsFormComponent } from './contacts/contacts-form/contacts-form.component';
import { FormUpComponent } from './contacts/form-up/form-up.component';
import { RemoveComponent } from './contacts/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsFormComponent,
    FormUpComponent,
    RemoveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
