import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './dashboard/status/status.component';
import { TasksListComponent } from './dashboard/tasks-list/tasks-list.component';

// primeng
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { SharedServices } from './shared/shared.services';
import { SharedServicesProvider } from './shared/shared-services.provider';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatusComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  providers: [SharedServices, SharedServicesProvider],
  bootstrap: [AppComponent],
  entryComponents: [TasksListComponent]
})
export class AppModule { }
