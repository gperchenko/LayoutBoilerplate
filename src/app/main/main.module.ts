import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from '../shared/services/services.module';

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
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ServicesModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    NavComponent
  ]
})
export class MainModule { }
