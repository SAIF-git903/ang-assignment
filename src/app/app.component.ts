import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-assessment';

  @ViewChild('matDrawerEnd') matDrawerEnd: MatDrawer | null = null;
  leftSideNavOpen = true;
  @Input() heading: string = 'Notifications Center';
  @Input() showHeader: boolean = true;
  @Input() rightSideNavOpen: boolean = true;
  @ContentChild('drawerEndTemplate') drawerEndTemplate!: TemplateRef<any>;
}
