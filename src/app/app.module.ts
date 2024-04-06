import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CopyComponent } from './components/copy/copy.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EditColorsComponent } from './components/edit-colors/edit-colors.component';
import { GenerateComponent } from './components/generate/generate.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SelectScreenComponent } from './components/select-screen/select-screen.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StatsComponent } from './components/stats/stats.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LgDashboardComponent } from './pages/lg-dashboard/lg-dashboard.component';
import { MobileAppComponent } from './pages/mobile-app/mobile-app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoaderInterceptor } from './interceptor/loading.interceptor';
import { LoaderService } from './services/loader.service';
import { ApiService } from './services/api.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ColorsComponent,
    GenerateComponent,
    LgDashboardComponent,
    CopyComponent,
    MobileAppComponent,
    PortfolioComponent,
    LandingComponent,
    AvatarComponent,
    NotificationComponent,
    BannerComponent,
    StatsComponent,
    CoursesComponent,
    SelectScreenComponent,
    ColorListComponent,
    EditColorsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ColorPickerModule,
  ],
  providers: [
    LoaderService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
