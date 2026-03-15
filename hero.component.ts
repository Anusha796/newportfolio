// hero.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Stat } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  stats: Stat[] = [];
  currentRole = '';
  private roles = [
    '.NET Full Stack Developer',
    'Angular 19 Engineer',
    'ASP.NET Core 6 Developer',
    'Azure Cloud Specialist',
    'Software Engineer @ Infor'
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private typing = true;
  private timer: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getStats().subscribe(s => this.stats = s);
    this.typeWriter();
  }

  ngOnDestroy() { clearTimeout(this.timer); }

  private typeWriter() {
    const role = this.roles[this.roleIndex];
    if (this.typing) {
      if (this.charIndex < role.length) {
        this.currentRole = role.substring(0, ++this.charIndex);
        this.timer = setTimeout(() => this.typeWriter(), 80);
      } else {
        this.typing = false;
        this.timer = setTimeout(() => this.typeWriter(), 2000);
      }
    } else {
      if (this.charIndex > 0) {
        this.currentRole = role.substring(0, --this.charIndex);
        this.timer = setTimeout(() => this.typeWriter(), 40);
      } else {
        this.typing = true;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.timer = setTimeout(() => this.typeWriter(), 400);
      }
    }
  }
}
