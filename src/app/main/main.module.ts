import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { TitleComponent } from './components/title/title.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: 'contacts', loadChildren: '../contact/contact.module#ContactModule' },
  { path: 'items', loadChildren: '../item/item.module#ItemModule' },
  { path: '**', redirectTo: 'contacts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    NavComponent
  ]
})
export class MainModule { }
