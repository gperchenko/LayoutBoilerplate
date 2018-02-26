import { Component, OnInit } from '@angular/core';

import  { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.title = "Contacts";
  }

}
