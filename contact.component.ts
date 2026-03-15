// contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<section id="contact" class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">// get in touch</span>
      <h2 class="section-title">Contact</h2>
      <div class="section-divider"></div>
    </div>
    <div class="contact-grid">
      <div class="contact-info">
        <p class="contact-intro">
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — feel free to reach out!
        </p>
        <div class="contact-items">
          <a class="contact-item" href="mailto:kanamarlapudianusha31@gmail.com">
            <div class="ci-icon"><span class="material-icons">mail_outline</span></div>
            <div>
              <p class="ci-label">Email</p>
              <p class="ci-value">kanamarlapudianusha31&#64;gmail.com</p>
            </div>
          </a>
          <a class="contact-item" href="tel:+918712390644">
            <div class="ci-icon"><span class="material-icons">phone</span></div>
            <div>
              <p class="ci-label">Phone</p>
              <p class="ci-value">+91 8712390644</p>
            </div>
          </a>
          <div class="contact-item">
            <div class="ci-icon"><span class="material-icons">location_on</span></div>
            <div>
              <p class="ci-label">Location</p>
              <p class="ci-value">Bengaluru, India</p>
            </div>
          </div>
          <a class="contact-item" href="https://www.linkedin.com/in/anushakanamarlapudiudi" target="_blank">
            <div class="ci-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div>
              <p class="ci-label">LinkedIn</p>
              <p class="ci-value">anushakanamarlapudiudi</p>
            </div>
          </a>
          <a class="contact-item" href="https://github.com/Anusha796" target="_blank">
            <div class="ci-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <div>
              <p class="ci-label">GitHub</p>
              <p class="ci-value">github.com/Anusha796</p>
            </div>
          </a>
        </div>
      </div>

      <form class="contact-form card" (ngSubmit)="onSubmit()" #f="ngForm">
        <h3 class="form-title">Send a message</h3>
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" [(ngModel)]="form.name" required placeholder="Your name" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" [(ngModel)]="form.email" required placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea name="message" [(ngModel)]="form.message" required rows="5" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center" [disabled]="submitted">
          <span class="material-icons" style="font-size:18px">{{ submitted ? 'check_circle' : 'send' }}</span>
          {{ submitted ? 'Message sent!' : 'Send message' }}
        </button>
        <p class="form-note" *ngIf="submitted">Thanks! I'll get back to you soon.</p>
      </form>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p class="footer-text">
      Designed & built by <span style="color:#3b82f6">Anusha Kanamarlapudi</span> &nbsp;·&nbsp;
      Angular 19 + .NET Core 6
    </p>
    <p class="footer-copy">© {{ year }} All rights reserved.</p>
  </div>
</footer>`,
  styles: [`
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
.contact-intro { font-size: 0.95rem; color: #94a3b8; line-height: 1.8; margin-bottom: 2rem; }
.contact-items { display: flex; flex-direction: column; gap: 1rem; }
.contact-item { display: flex; align-items: center; gap: 1rem; text-decoration: none; padding: 0.75rem 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); transition: all 0.3s; }
.contact-item:hover { border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.05); }
.ci-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(59,130,246,0.1); display: flex; align-items: center; justify-content: center; color: #3b82f6; flex-shrink: 0; }
.ci-label { font-size: 0.72rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
.ci-value { font-size: 0.88rem; color: #f8fafc; margin-top: 2px; }
.contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
.form-title { font-size: 1.1rem; font-weight: 600; color: #f8fafc; margin-bottom: 0.5rem; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 0.8rem; color: #94a3b8; font-weight: 500; }
.form-group input, .form-group textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 0.75rem 1rem; color: #f8fafc; font-family: 'Inter', sans-serif; font-size: 0.9rem; outline: none; transition: border-color 0.2s; resize: vertical; }
.form-group input:focus, .form-group textarea:focus { border-color: rgba(59,130,246,0.5); }
.form-group input::placeholder, .form-group textarea::placeholder { color: #475569; }
.form-note { font-size: 0.8rem; color: #10b981; text-align: center; }
.footer { border-top: 1px solid rgba(255,255,255,0.06); padding: 2rem 0; text-align: center; }
.footer-text { font-size: 0.85rem; color: #64748b; margin-bottom: 4px; }
.footer-copy { font-size: 0.78rem; color: #475569; }
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
`]
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;
  year = new Date().getFullYear();

  onSubmit() {
    // Wire this to your .NET Core 6 API endpoint: POST /api/contact
    console.log('Form submitted:', this.form);
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', message: '' };
    }, 4000);
  }
}
