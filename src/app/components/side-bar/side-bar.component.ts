import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  ScreenViews,
  SelectScreenComponent,
} from '../select-screen/select-screen.component';

export enum MenuLinks {
  NEW = 'new',
  TOP = 'top',
  SAVED = 'saved',
  VIEWS = 'views',
  EDIT = 'edit',
  HISTORY = 'history',
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  selectedMenu: MenuLinks = MenuLinks.NEW;
  menuLinks = MenuLinks;

  onSelectMenu(menu: MenuLinks): void {
    this.selectedMenu = menu;
  }
}
