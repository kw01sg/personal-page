import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NavTopBarComponent } from './nav-top-bar/nav-top-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AppInfoComponent } from './app-info/app-info.component';

const appRoutes: Routes = [
  // { path: 'about-me', component: PersonalInfoComponent },
  { path: 'experience', component: ExperienceComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'achievements', component: AchievementsComponent },
  // { path: 'about-this-page', component: AppInfoComponent },
  { path: '', redirectTo: '/experience', pathMatch: 'full' },
  { path: '**', component: PlaceholderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    NavTopBarComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    PersonalInfoComponent,
    AppInfoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
