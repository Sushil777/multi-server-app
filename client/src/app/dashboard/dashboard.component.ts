import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver,
  OnDestroy } from '@angular/core';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SharedServices } from '../shared/shared.services';
import { SharedServicesProvider } from '../shared/shared-services.provider';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild('tasksList', { read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: any;
  blockUI = false;
  subscription: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private sharedServices: SharedServices,
    private sharedServicesProvider: SharedServicesProvider) { }

  ngOnInit() {
    this.subscription = this.sharedServicesProvider.statusSearch
      .subscribe(status => {
        if (status !== '') {
          this.blockUI = true;
          this.sharedServices.getTasksList(status)
            .subscribe(tasksList => {
              this.blockUI = false;
              this.createComponent(tasksList);
            },
            (error) => {
              this.blockUI = false;
            });
        }
      });
  }

  createComponent(tasksList) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(TasksListComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.tasksList = tasksList;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.componentRef.destroy();
  }

}
