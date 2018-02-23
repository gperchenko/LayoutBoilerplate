import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  { path: 'list', component: ItemListComponent },
  { path: '**', redirectTo: 'list' }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [ItemListComponent]
})
export class ItemModule { }
