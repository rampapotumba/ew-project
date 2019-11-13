import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-notification',
  template: `
      <div class="alert warning">
        <p>warning-notification</p>
      </div>`
})
export class WarningNotificationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
