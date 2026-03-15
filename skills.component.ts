// skills.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillGroup } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="skills" class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">// tech stack</span>
      <h2 class="section-title">Skills</h2>
      <div class="section-divider"></div>
    </div>
    <div class="skills-grid">
      <div class="card skill-card" *ngFor="let g of skillGroups">
        <div class="skill-header">
          <span class="material-icons skill-icon">{{ g.icon }}</span>
          <h3 class="skill-cat">{{ g.category }}</h3>
        </div>
        <div class="skill-pills">
          <span class="skill-pill" *ngFor="let s of g.skills">{{ s }}</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
  styles: [`
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
.skill-card { display: flex; flex-direction: column; gap: 1rem; }
.skill-header { display: flex; align-items: center; gap: 10px; }
.skill-icon { color: #3b82f6; font-size: 22px !important; }
.skill-cat { font-size: 1rem; font-weight: 600; color: #f8fafc; }
.skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-pill { font-size: 0.8rem; padding: 5px 14px; border-radius: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; transition: all 0.2s; cursor: default; }
.skill-pill:hover { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.3); color: #60a5fa; }
`]
})
export class SkillsComponent implements OnInit {
  skillGroups: SkillGroup[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getSkills().subscribe(s => this.skillGroups = s); }
}
