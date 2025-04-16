import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-common-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./common-header.component.html",
  styleUrls: ["./common-header.component.scss"],
})
export class CommonHeaderComponent {
  @Input() heading: string = "N/A";
}
