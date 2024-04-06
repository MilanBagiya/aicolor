import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export enum ScreenViews {
  MOBILE_SCREEN = 'Mobile App',
  DASHBOARD_SCREEN = 'Dashboard',
  PORTFOLIO_SCREEN = 'Portfolio',
  LANDING_SCREEN = 'Landing Page',
}

@Component({
  selector: 'app-select-screen',
  templateUrl: './select-screen.component.html',
  styleUrls: ['./select-screen.component.scss'],
})
export class SelectScreenComponent {
  ScreenViews = ScreenViews;
  selectedScreen: ScreenViews = ScreenViews.DASHBOARD_SCREEN;

  constructor(private api: ApiService) {}

  selectScreenView(screen: ScreenViews): void {
    this.api.setSelectedScreen(screen);
    this.selectedScreen = screen;
  }
}
