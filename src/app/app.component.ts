import { Component, OnInit } from '@angular/core';
import { ScreenViews } from './components/select-screen/select-screen.component';
import { ApiService } from './services/api.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  screenList = ScreenViews;
  selectedScreen: ScreenViews;

  constructor(
    private apiService: ApiService,
    public loadingService: LoaderService
  ) {}

  ngOnInit() {
    this.apiService.selectedScreen$.subscribe((screen) => {
      this.selectedScreen = screen;
    });
  }
}
