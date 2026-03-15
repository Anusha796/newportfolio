import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './portfolio.service';
import { SkillGroup } from './portfolio.model';

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
.skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.4rem}
.skill-card{background:rgba(30,41,59,0.7);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.4rem;backdrop-filter:blur(10px)}
.skill-cat{font-size:.92rem;font-weight:600;color:#f8fafc;margin-bottom:1rem}
.skill-pills{display:flex;flex-wrap:wrap;gap:6px}
.skill-pill{font-size:.75rem;padding:4px 12px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#cbd5e1;transition:.2s;cursor:default}
.skill-pill:hover{background:rgba(59,130,246,.15);border-color:rgba(59,130,246,.3);color:#60a5fa}
.section{padding:90px 2rem}
.container{max-width:1100px;margin:0 auto}
.section-header{text-align:center;margin-bottom:3.5rem}
.section-tag{font-family:'Fira Code',monospace;font-size:.75rem;color:#3b82f6;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.2);padding:4px 14px;border-radius:20px;display:inline-block;margin-bottom:.75rem}
.section-title{font-size:2rem;font-weight:700;background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.75rem}
.section-divider{width:50px;height:3px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);margin:0 auto;border-radius:2px}
`]
})
export class SkillsComponent implements OnInit {
  skillGroups: SkillGroup[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getSkills().subscribe((s: SkillGroup[]) => this.skillGroups = s); }
}
