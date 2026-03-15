// certifications.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Certification } from '../../models/portfolio.model';

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
      <div class="card cert-card" *ngFor="let c of certs">
        <div class="cert-icon-wrap">
          <span class="material-icons cert-icon">verified</span>
        </div>
        <div class="cert-body">
          <p class="cert-title">{{ c.title }}</p>
          <p class="cert-issuer">{{ c.issuer }}</p>
        </div>
      </div>
    </div>

    <div class="edu-block card" style="margin-top:3rem">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:0.5rem">
        <span class="material-icons" style="color:#3b82f6;font-size:24px">school</span>
        <h3 style="font-size:1rem;font-weight:600;color:#f8fafc">Education</h3>
      </div>
      <p style="font-size:1rem;font-weight:500;color:#f8fafc">B.Tech — Computer Science & Engineering</p>
      <p style="font-size:0.85rem;color:#3b82f6;margin-top:4px">Khammam Institute of Technology and Sciences</p>
      <p style="font-size:0.78rem;color:#64748b;font-family:'Fira Code',monospace;margin-top:6px">Jun 2018 – Jul 2022</p>
    </div>
  </div>
</section>`,
  styles: [`
.cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
.cert-card { display: flex; align-items: flex-start; gap: 1rem; }
.cert-icon-wrap { width: 40px; height: 40px; border-radius: 10px; background: rgba(59,130,246,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cert-icon { color: #3b82f6; font-size: 20px !important; }
.cert-title { font-size: 0.9rem; font-weight: 500; color: #f8fafc; line-height: 1.4; }
.cert-issuer { font-size: 0.78rem; color: #64748b; margin-top: 4px; }
`]
})
export class CertificationsComponent implements OnInit {
  certs: Certification[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getCertifications().subscribe(c => this.certs = c); }
}
