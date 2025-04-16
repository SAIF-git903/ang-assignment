import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notifications-center",
  templateUrl: "./notifications-center.component.html",
  styleUrls: ["./notifications-center.component.scss"],
})
export class NotificationsCenterComponent implements OnInit {
  tabsList = ["Job Alerts", "Reminders", "Assessments"];
  selectedTab = "Job Alerts";

  constructor() {}

  ngOnInit(): void {}
}
