import { Component, OnInit, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

    constructor(zone: NgZone) {
      this.mediaMatcher.addListener(mql =>
        zone.run(() => this.mediaMatcher = mql));
    }

    ngOnInit() {
    }

    isScreenSmall(): boolean {
      return this.mediaMatcher.matches;
    }
}
