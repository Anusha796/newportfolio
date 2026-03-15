import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './portfolio.service';
import { Certification } from './portfolio.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="certifications" class="section" style="background:rgba(30,41,59,0.2)">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">// credentials</span>
      <h2 class="section-title">Certifications</h2>
      <div class="section-divider"></div>
    </div>
    <div class="cert-grid">
      <div class="cert-card" *ngFor="let c of certs">
        <div class="cert-dot"></div>
        <div>
          <p class="cert-title">{{ c.title }}</p>
          <p class="cert-issuer">{{ c.issuer }}</p>
        </div>
      </div>
    </div>
    <div class="edu-block">
      <div>
        <p class="edu-deg">B.Tech — Computer Science & Engineering</p>
        <p class="edu-inst">Khammam Institute of Technology and Sciences</p>
        <p class="edu-yr">Jun 2018 – Jul 2022</p>
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
.cert-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
.cert-card{background:rgba(30,41,59,0.7);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:1.1rem 1.3rem;display:flex;align-items:center;gap:.9rem;transition:.3s}
.cert-card:hover{border-color:rgba(59,130,246,.3)}
.cert-dot{width:10px;height:10px;border-radius:50%;background:#3b82f6;flex-shrink:0}
.cert-title{font-size:.85rem;font-weight:500;color:#f8fafc}
.cert-issuer{font-size:.72rem;color:#64748b;margin-top:3px}
.edu-block{background:rgba(30,41,59,0.7);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.4rem 1.6rem;margin-top:2rem}
.edu-deg{font-size:.95rem;font-weight:600;color:#f8fafc}
.edu-inst{font-size:.82rem;color:#3b82f6;margin-top:3px}
.edu-yr{font-size:.72rem;color:#64748b;font-family:'Fira Code',monospace;margin-top:5px}
`]
})
export class CertificationsComponent implements OnInit {
  certs: Certification[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getCertifications().subscribe((c: Certification[]) => this.certs = c); }
}
