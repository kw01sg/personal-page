import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

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
import { InterestsComponent } from './personal-info/interests/interests.component';
import { TechnicalSkillsComponent } from './personal-info/technical-skills/technical-skills.component';
import { TechnicalSkillComponent } from './personal-info/technical-skills/technical-skill/technical-skill.component';
import { EducationsComponent } from './personal-info/educations/educations.component';
import { EducationComponent } from './personal-info/educations/education/education.component';
import { ScrollDirective } from './nav-top-bar/scroll.directive';

import { WindowRef } from './shared/services/window-ref.service';
import { PageNavComponent } from './page-header/page-nav/page-nav.component';
import { ImageCardComponent } from './image-card/image-card.component';

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
    AchievementComponent,
    InterestsComponent,
    TechnicalSkillsComponent,
    TechnicalSkillComponent,
    EducationsComponent,
    EducationComponent,
    ScrollDirective,
    PageNavComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    NgxPageScrollModule
  ],
  providers: [
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
