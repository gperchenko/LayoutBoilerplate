import { Component, OnInit } from '@angular/core';

import  { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.title = "Items";
  }

}
