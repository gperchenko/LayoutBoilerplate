import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { TitleComponent } from './components/title/title.component';
import { NavComponent } from './components/nav/nav.component';

import { ContactModule } from '../contact/contact.module';
import { ContactListComponent } from '../contact/components/contact-list/contact-list.component';

import { ItemModule } from '../item/item.module';
import { ItemListComponent } from '../item/components/item-list/item-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'items', component: ItemListComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [
    ContactModule,
    ItemModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    NavComponent
  ]
})
export class MainModule { }
