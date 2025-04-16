import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsCenterModule } from './pages/notifications-center/notifications-center.module';
import { CommonHeaderComponent } from './shared/common-header/common-header.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './shared/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CommonModule,
    CommonHeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MatSidenavModule,
    NotificationsCenterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
