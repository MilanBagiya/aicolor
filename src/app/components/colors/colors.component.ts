import { ApiService } from './../../services/api.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorScheme } from 'src/app/services/api.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  @Input() scheme: ColorScheme;
  @Input() selectedTheme: boolean = false;
  monthDiff: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonth();
  }

  getMonth(): void {
    const startDate = new Date(this.scheme.created_at);
    const endDate = new Date();
    const monthDifference = this.apiService.calculateMonthDifference(
      startDate,
      endDate
    );

    this.monthDiff = `${monthDifference}  mos`;
  }
}
