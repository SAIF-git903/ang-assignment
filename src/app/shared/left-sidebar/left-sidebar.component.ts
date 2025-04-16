import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-left-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule, MatTooltipModule],
  templateUrl: "./left-sidebar.component.html",
  styleUrls: ["./left-sidebar.component.scss"],
})
export class LeftSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
