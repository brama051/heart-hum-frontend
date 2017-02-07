import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './views/login/login.component';
import { RecordingComponent } from './views/recording/recording.component';
import { RecordingHistoryComponent } from './views/recording-history/recording-history.component';
import { DiagnosticsComponent } from './views/diagnostics/diagnostics.component';
import { EducationComponent } from './views/education/education.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const appRoutes: Routes = [
  { path: 'recording',          component: RecordingComponent },
  { path: 'recording-history',  component: RecordingHistoryComponent },
  { path: 'diagnostics',        component: DiagnosticsComponent },
  { path: 'learn-more',         component: EducationComponent },
  { path: 'login',              component: LoginComponent },

  { path: '',
    redirectTo: '/recording',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RecordingComponent,
    RecordingHistoryComponent,
    DiagnosticsComponent,
    EducationComponent,
    PieChartComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
