import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Routes = [
  { path: 'list', component: ContactListComponent },
  { path: '**', redirectTo: 'list'}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [ContactListComponent]
})
export class ContactModule { }
