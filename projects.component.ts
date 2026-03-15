// projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="projects" class="section" style="background:rgba(30,41,59,0.2)">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">// what i've built</span>
      <h2 class="section-title">Projects</h2>
      <div class="section-divider"></div>
    </div>
    <div class="proj-grid">
      <div class="card proj-card" *ngFor="let p of projects">
        <div class="proj-top">
          <span class="material-icons proj-icon">folder_open</span>
          <span class="proj-highlight">{{ p.highlight }}</span>
        </div>
        <h3 class="proj-name">{{ p.name }}</h3>
        <p class="proj-period">{{ p.period }}</p>
        <p class="proj-desc">{{ p.description }}</p>
        <div class="proj-tags">
          <span class="badge" *ngFor="let t of p.tags">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
  styles: [`
.proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.proj-card { display: flex; flex-direction: column; gap: 0.75rem; }
.proj-top { display: flex; justify-content: space-between; align-items: center; }
.proj-icon { color: #3b82f6; font-size: 28px !important; }
.proj-highlight { font-size: 0.72rem; color: #10b981; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); padding: 3px 10px; border-radius: 20px; }
.proj-name { font-size: 1rem; font-weight: 600; color: #f8fafc; }
.proj-period { font-size: 0.75rem; color: #64748b; font-family: 'Fira Code', monospace; }
.proj-desc { font-size: 0.85rem; color: #94a3b8; line-height: 1.7; flex: 1; }
`]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getProjects().subscribe(p => this.projects = p); }
}
