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
        <p>I'm a <strong>.NET Full Stack Developer</strong> with 3+ years of experience building scalable, high-performance web applications. I currently work at <strong style="color:#3b82f6">Infor (India) Pvt. Ltd.</strong> as a Software Engineer in Hyderabad, developing the Infor CloudSuite Portal — a multi-tenant SaaS platform used by enterprises worldwide.</p>
        <p>My core stack is <strong>ASP.NET Core 6</strong>, <strong>Angular 19</strong>, C#, SQL Server, and <strong>Microsoft Azure</strong>. I'm passionate about clean architecture, API design, and delivering software that performs at scale.</p>
        <p>Before Infor, I spent 2.5 years at <strong>Capgemini Technology Services</strong> working on aircraft maintenance systems and enterprise deployments — sharpening my skills in RESTful APIs, CI/CD, and Agile delivery.</p>
        <div class="about-highlights">
          <div class="highlight" *ngFor="let h of highlights">
            <span class="hl-dot"></span>
            <span class="h-text">{{ h }}</span>
          </div>
        </div>
      </div>
      <div class="info-card">
        <div class="ic-head">
          <div class="ic-av">AK</div>
          <div>
            <p class="ic-name">Anusha Kanamarlapudi</p>
            <p class="ic-role">.NET Full Stack Developer</p>
          </div>
        </div>
        <div class="ic-rows">
          <div class="ic-row" *ngFor="let d of details">
            <span class="ic-key">{{ d.key }}</span>
            <span class="ic-val">{{ d.val }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  styles: [`
.section { padding: 90px 2rem; }
.container { max-width: 1100px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 3.5rem; }
.section-tag { font-family: 'Fira Code', monospace; font-size: .75rem; color: #3b82f6; background: rgba(59,130,246,.1); border: 1px solid rgba(59,130,246,.2); padding: 4px 14px; border-radius: 20px; display: inline-block; margin-bottom: .75rem; }
.section-title { font-size: clamp(1.6rem,3.5vw,2.2rem); font-weight: 700; background: linear-gradient(135deg,#3b82f6,#8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: .75rem; }
.section-divider { width: 50px; height: 3px; background: linear-gradient(135deg,#3b82f6,#8b5cf6); margin: 0 auto; border-radius: 2px; }
.about-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 4rem; align-items: start; }
.about-text p { font-size: .92rem; color: #94a3b8; line-height: 1.9; margin-bottom: 1.1rem; }
.about-text strong { color: #f8fafc; }
.about-highlights { display: flex; flex-direction: column; gap: .6rem; margin-top: 1.2rem; }
.highlight { display: flex; align-items: center; gap: .6rem; font-size: .85rem; color: #94a3b8; }
.hl-dot { width: 6px; height: 6px; border-radius: 50%; background: #3b82f6; flex-shrink: 0; }
.info-card { background: rgba(30,41,59,0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; backdrop-filter: blur(10px); }
.ic-head { display: flex; align-items: center; gap: .9rem; margin-bottom: 1.2rem; padding-bottom: 1.2rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
.ic-av { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg,#3b82f6,#8b5cf6); display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 700; color: #fff; flex-shrink: 0; }
.ic-name { font-size: .92rem; font-weight: 600; color: #f8fafc; }
.ic-role { font-size: .75rem; color: #64748b; margin-top: 3px; }
.ic-rows { display: flex; flex-direction: column; }
.ic-row { display: flex; justify-content: space-between; gap: .5rem; padding: .45rem 0; border-bottom: 1px solid rgba(255,255,255,.04); }
.ic-key { font-size: .72rem; color: #64748b; text-transform: uppercase; letter-spacing: .05em; }
.ic-val { font-size: .82rem; color: #f8fafc; text-align: right; }
@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
`]
})
export class AboutComponent {
  highlights = [
    'SaaS & multi-tenant platform development at Infor, Hyderabad',
    'JWT authentication & secure API design',
    'Azure cloud deployment & CI/CD pipelines',
    'Agile/Scrum with 95% on-time delivery rate'
  ];

  details = [
    { key: 'Location', val: 'Hyderabad, India' },
    { key: 'Current', val: 'Infor (India) Pvt. Ltd.' },
    { key: 'Experience', val: '3+ years' },
    { key: 'Frontend', val: 'Angular 19' },
    { key: 'Backend', val: 'ASP.NET Core 6' },
    { key: 'Cloud', val: 'Microsoft Azure' },
    { key: 'Education', val: 'B.Tech CSE' },
    { key: 'Available', val: 'Open to offers' }
  ];
}
