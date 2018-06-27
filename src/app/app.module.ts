import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NavTopBarComponent } from './nav-top-bar/nav-top-bar.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AchievementComponent } from './achievements/achievement/achievement.component';
import { ExperienceComponent } from './experiences/experience/experience.component';

const appRoutes: Routes = [
  { path: 'about-me', component: PersonalInfoComponent },
  { path: 'experience', component: ExperiencesComponent },
  // { path: 'projects', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  // { path: 'about-this-page', component: AppInfoComponent },
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: '**', component: PlaceholderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    NavTopBarComponent,
    ExperiencesComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    PersonalInfoComponent,
    AppInfoComponent,
    PageHeaderComponent,
    AchievementComponent
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
