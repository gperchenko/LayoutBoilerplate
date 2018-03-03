import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

import  { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    public titleService: TitleService
  ) { }

  ngOnInit() {
  }

}
