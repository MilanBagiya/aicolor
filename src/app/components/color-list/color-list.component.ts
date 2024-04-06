import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService, ColorScheme } from 'src/app/services/api.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent implements OnInit, OnDestroy {
  @Input() isReversed: boolean = false;
  colorsList: ColorScheme[] = [];
  subscription: Subscription = new Subscription();
  selectedId: number;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors(): void {
    this.subscription = this.api.getColorList().subscribe((response: any) => {
      if (this.isReversed) {
        this.colorsList = response.reverse();
      } else {
        this.colorsList = response;
      }

      this.selectedId = this.colorsList[0].id;
      this.onClickSetColors(this.colorsList[0]);
      this.api.setSelectedColor(this.colorsList[0]);
    });
  }

  onClickSetColors(color: ColorScheme): void {
    this.selectedId = color.id;
    this.api.setSelectedColor(color);
    
    document.documentElement.style.setProperty(`--bg`, color.bg);
    document.documentElement.style.setProperty(`--bg-focus`, color.bgFocus);
    document.documentElement.style.setProperty(
      `--primary-clear`,
      color.primaryClear
    );
    document.documentElement.style.setProperty(
      `--primary-dull`,
      color.primaryDull
    );
    document.documentElement.style.setProperty(
      `--primary-visible`,
      color.primaryVisible
    );
    document.documentElement.style.setProperty(
      `--accent-clear`,
      color.accentClear
    );
    document.documentElement.style.setProperty(
      `--accent-dull`,
      color.accentDull
    );
    document.documentElement.style.setProperty(`--clear`, color.clear);
    document.documentElement.style.setProperty(`--dull`, color.dull);
    document.documentElement.style.setProperty(`--duller`, color.duller);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
