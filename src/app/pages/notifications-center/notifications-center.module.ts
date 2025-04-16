import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NotificationsCenterRoutingModule } from "./notifications-center-routing.module";
import { NotificationsCenterComponent } from "./notifications-center.component";

@NgModule({
  declarations: [NotificationsCenterComponent],
  imports: [
    CommonModule,
    NotificationsCenterRoutingModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  exports: [
    NotificationsCenterComponent
  ]
})
export class NotificationsCenterModule {}
