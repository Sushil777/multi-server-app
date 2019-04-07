import { Component, OnInit } from '@angular/core';

import { SharedServices } from 'src/app/shared/shared.services';
import { SharedServicesProvider } from 'src/app/shared/shared-services.provider';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent implements OnInit {

  StatusList = [];
  blockUI = false;

  constructor(
    private sharedServices: SharedServices,
    private sharedServicesProvider: SharedServicesProvider) { }

  ngOnInit() {
    this.blockUI = true;
    this.sharedServices.getAllStatus()
      .subscribe((response: any) => {
        this.StatusList = response;
        this.blockUI = false;
      },
      (error) => {
        this.blockUI = false;
      });
  }

  statusSelected(name) {
    this.sharedServicesProvider.statusSearch.next(name);
  }

}
