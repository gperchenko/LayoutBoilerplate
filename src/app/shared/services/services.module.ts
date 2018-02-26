import { NgModule,  ModuleWithProviders} from '@angular/core';

import { TitleService } from './title.service';

@NgModule({})
export class ServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        TitleService
      ]
    }
  }
 }
