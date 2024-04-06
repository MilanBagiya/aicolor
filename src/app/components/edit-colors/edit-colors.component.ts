import { Component, OnInit } from '@angular/core';
import { ApiService, ColorScheme } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-colors',
  templateUrl: './edit-colors.component.html',
  styleUrls: ['./edit-colors.component.scss'],
})
export class EditColorsComponent implements OnInit {
  selectedColor: ColorScheme;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.selectedColor$.subscribe((color) => {
      this.selectedColor = color;
    });
  }

  public onChangeColor(color: string, name: string): void {
    document.documentElement.style.setProperty(name, color);
  }
}
