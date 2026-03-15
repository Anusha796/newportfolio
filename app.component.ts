import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { ExperienceComponent } from './experience.component';
import { ProjectsComponent } from './projects.component';
import { SkillsComponent } from './skills.component';
import { CertificationsComponent } from './certifications.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
    </main>
  `
})
export class AppComponent {}
