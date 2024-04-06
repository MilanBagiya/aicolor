import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScreenViews } from '../components/select-screen/select-screen.component';

export interface ColorScheme {
  id: number;
  created_at: string;
  bg: string;
  bgFocus: string;
  primaryClear: string;
  primaryDull: string;
  primaryVisible: string;
  accentClear: string;
  accentDull: string;
  clear: string;
  dull: string;
  duller: string;
  likes: number;
  prompt: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzdWlmbWJxZWZueHl0cXdtYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMjE1ODMsImV4cCI6MTk5MjU5NzU4M30.09YStNMblCJmFgb9BvpbrGEv4vVyePe3zSI7KeVzVTU',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzdWlmbWJxZWZueHl0cXdtYW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMjE1ODMsImV4cCI6MTk5MjU5NzU4M30.09YStNMblCJmFgb9BvpbrGEv4vVyePe3zSI7KeVzVTU',
  });

  private selectedScreenSubject = new BehaviorSubject<ScreenViews>(
    ScreenViews.DASHBOARD_SCREEN
  );
  selectedScreen$ = this.selectedScreenSubject.asObservable();

  private selectedColorSubject = new BehaviorSubject<ColorScheme>(null);
  selectedColor$ = this.selectedColorSubject.asObservable();

  baseUrl: string =
    'https://jsuifmbqefnxytqwmaoy.supabase.co/rest/v1/palette?select=*&order=likes.desc';

  constructor(private http: HttpClient) {}

  setSelectedScreen(screen: ScreenViews) {
    this.selectedScreenSubject.next(screen);
  }

  setSelectedColor(color: ColorScheme) {
    this.selectedColorSubject.next(color);
  }

  getColorList(): Observable<ColorScheme[]> {
    return this.http.get<ColorScheme[]>(this.baseUrl, {
      headers: this.headers,
    });
  }

  calculateMonthDifference(startDate: Date, endDate: Date): number {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    return (endYear - startYear) * 12 + (endMonth - startMonth);
  }
}
