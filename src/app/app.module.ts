import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BasicModelComponent } from './basic-model/basic-model.component'
import {MatTabsModule} from '@angular/material/tabs';
import { AboutComponent } from './about/about.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlertComponent } from './alert/alert.component'
import { MatGridListModule} from '@angular/material/grid-list';
import { ToolComponent } from './tool/tool.component';
import { UserModule } from './user/user.module';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/backend';
import { LayoutComponent } from './account/layout.component';
import {MatMenuModule} from '@angular/material/menu'
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  },
  { path: 'basic-model', component: BasicModelComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    CardComponent,
    PageNotFoundComponent,
    PieChartComponent,
    BasicModelComponent,
    AboutComponent,
    AlertComponent,
    ToolComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatCardModule, 
    FormsModule,
    NgChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterTestingModule,
    HttpClientModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routes),
    NgxChartsModule,
    NgOptimizedImage,
    MatTabsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTooltipModule,
    UserModule,
    MatMenuModule
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
