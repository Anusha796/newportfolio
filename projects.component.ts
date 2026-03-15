import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './portfolio.service';
import { Project } from './portfolio.model';

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
      <div class="proj-card" *ngFor="let p of projects">
        <div class="proj-top">
          <span class="proj-hl">{{ p.highlight }}</span>
        </div>
        <h3 class="proj-name">{{ p.name }}</h3>
        <p class="proj-period">{{ p.period }}</p>
        <p class="proj-desc">{{ p.description }}</p>
        <div class="proj-tags">
          <span class="tag" *ngFor="let t of p.tags">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
  styles: [`
.section{padding:90px 2rem}
.container{max-width:1100px;margin:0 auto}
.section-header{text-align:center;margin-bottom:3.5rem}
.section-tag{font-family:'Fira Code',monospace;font-size:.75rem;color:#3b82f6;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.2);padding:4px 14px;border-radius:20px;display:inline-block;margin-bottom:.75rem}
.section-title{font-size:2rem;font-weight:700;background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.75rem}
.section-divider{width:50px;height:3px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);margin:0 auto;border-radius:2px}
.proj-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.4rem}
.proj-card{background:rgba(30,41,59,0.7);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.4rem;display:flex;flex-direction:column;gap:.7rem;backdrop-filter:blur(10px);transition:.3s}
.proj-card:hover{border-color:rgba(59,130,246,.35);transform:translateY(-4px)}
.proj-top{display:flex;justify-content:flex-end}
.proj-hl{font-size:.68rem;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.22);padding:3px 10px;border-radius:20px}
.proj-name{font-size:.98rem;font-weight:600;color:#f8fafc}
.proj-period{font-size:.72rem;color:#64748b;font-family:'Fira Code',monospace}
.proj-desc{font-size:.83rem;color:#94a3b8;line-height:1.7;flex:1}
.proj-tags{display:flex;flex-wrap:wrap;gap:5px}
.tag{font-size:.68rem;padding:3px 10px;border-radius:20px;background:rgba(59,130,246,.12);color:#60a5fa;border:1px solid rgba(59,130,246,.2)}
`]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getProjects().subscribe((p: Project[]) => this.projects = p); }
}
