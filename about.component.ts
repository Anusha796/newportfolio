// about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="about" class="section" style="background:rgba(30,41,59,0.2)">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">// who i am</span>
      <h2 class="section-title">About Me</h2>
      <div class="section-divider"></div>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p>
          I'm a <strong>.NET Full Stack Developer</strong> with 3+ years of experience building
          scalable, high-performance web applications. I currently work at
          <strong style="color:#3b82f6">Infor (India) Pvt. Ltd.</strong> as a Software Engineer,
          developing the Infor CloudSuite Portal — a multi-tenant SaaS platform used by enterprises worldwide.
        </p>
        <p>
          My core stack is <strong>ASP.NET Core 6</strong>, <strong>Angular 19</strong>, C#,
          SQL Server, and <strong>Microsoft Azure</strong>. I'm passionate about clean architecture,
          API design, and delivering software that performs at scale.
        </p>
        <p>
          Before Infor, I spent 2.5 years at <strong>Capgemini Technology Services</strong> working
          on aircraft maintenance systems and enterprise deployments — where I sharpened my skills
          in RESTful APIs, CI/CD, and Agile delivery.
        </p>
        <div class="about-highlights">
          <div class="highlight" *ngFor="let h of highlights">
            <span class="material-icons h-icon">{{ h.icon }}</span>
            <span class="h-text">{{ h.text }}</span>
          </div>
        </div>
      </div>
      <div class="about-card card">
        <div class="ac-header">
          <div class="ac-avatar">AK</div>
          <div>
            <p class="ac-name">Anusha Kanamarlapudi</p>
            <p class="ac-role">.NET Full Stack Developer</p>
          </div>
        </div>
        <div class="ac-rows">
          <div class="ac-row" *ngFor="let d of details">
            <span class="ac-key">{{ d.key }}</span>
            <span class="ac-val">{{ d.val }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  styles: [`
.about-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: start; }
.about-text p { font-size: 0.95rem; color: #94a3b8; line-height: 1.9; margin-bottom: 1.2rem; }
.about-text strong { color: #f8fafc; }
.about-highlights { display: flex; flex-direction: column; gap: 10px; margin-top: 1.5rem; }
.highlight { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; color: #94a3b8; }
.h-icon { font-size: 18px !important; color: #3b82f6; }
.ac-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
.ac-avatar { width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg,#3b82f6,#8b5cf6); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 700; color: white; flex-shrink: 0; }
.ac-name { font-size: 0.95rem; font-weight: 600; color: #f8fafc; }
.ac-role { font-size: 0.78rem; color: #64748b; margin-top: 3px; }
.ac-rows { display: flex; flex-direction: column; gap: 0.75rem; }
.ac-row { display: flex; justify-content: space-between; gap: 1rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
.ac-key { font-size: 0.78rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0; }
.ac-val { font-size: 0.85rem; color: #f8fafc; text-align: right; }
@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
`]
})
export class AboutComponent {
  highlights = [
    { icon: 'rocket_launch', text: 'SaaS & multi-tenant platform development at Infor' },
    { icon: 'security', text: 'JWT authentication & secure API design' },
    { icon: 'cloud_done', text: 'Azure cloud deployment & CI/CD pipelines' },
    { icon: 'groups', text: 'Agile/Scrum with 95% on-time delivery rate' }
  ];

  details = [
    { key: 'Location', val: 'Bengaluru, India' },
    { key: 'Current', val: 'Infor (India) Pvt. Ltd.' },
    { key: 'Experience', val: '3+ years' },
    { key: 'Frontend', val: 'Angular 19' },
    { key: 'Backend', val: 'ASP.NET Core 6' },
    { key: 'Cloud', val: 'Microsoft Azure' },
    { key: 'Education', val: 'B.Tech CSE' },
    { key: 'Available', val: 'Open to offers' }
  ];
}
