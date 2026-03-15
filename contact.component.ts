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
        <p class="contact-intro">I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — feel free to reach out!</p>
        <div class="contact-items">
          <a class="ci" href="mailto:kanamarlapudianusha31@gmail.com">
            <div class="ci-ic">✉</div>
            <div><p class="ci-lbl">Email</p><p class="ci-val">kanamarlapudianusha31&#64;gmail.com</p></div>
          </a>
          <a class="ci" href="tel:+918712390644">
            <div class="ci-ic">📞</div>
            <div><p class="ci-lbl">Phone</p><p class="ci-val">+91 8712390644</p></div>
          </a>
          <div class="ci">
            <div class="ci-ic">📍</div>
            <div><p class="ci-lbl">Location</p><p class="ci-val">Hyderabad, India</p></div>
          </div>
          <a class="ci" href="https://www.linkedin.com/in/anushakanamarlapudiudi" target="_blank">
            <div class="ci-ic">in</div>
            <div><p class="ci-lbl">LinkedIn</p><p class="ci-val">anushakanamarlapudiudi</p></div>
          </a>
          <a class="ci" href="https://github.com/Anusha796" target="_blank">
            <div class="ci-ic">GH</div>
            <div><p class="ci-lbl">GitHub</p><p class="ci-val">github.com/Anusha796</p></div>
          </a>
        </div>
      </div>
      <form class="cform" (ngSubmit)="onSubmit()">
        <h3>Send a message</h3>
        <div class="fg"><label>Name</label><input type="text" name="name" [(ngModel)]="form.name" placeholder="Your name" /></div>
        <div class="fg"><label>Email</label><input type="email" name="email" [(ngModel)]="form.email" placeholder="your@email.com" /></div>
        <div class="fg"><label>Message</label><textarea name="message" [(ngModel)]="form.message" rows="5" placeholder="Your message..."></textarea></div>
        <button type="submit" class="submit-btn">{{ submitted ? 'Message sent!' : 'Send message' }}</button>
        <p *ngIf="submitted" style="font-size:.8rem;color:#10b981;text-align:center;margin-top:.5rem">Thanks! I'll get back to you soon.</p>
      </form>
    </div>
  </div>
</section>
<footer style="border-top:1px solid rgba(255,255,255,0.06);padding:1.8rem 2rem;text-align:center">
  <p style="font-size:.82rem;color:#64748b">Designed & built by <span style="color:#3b82f6">Anusha Kanamarlapudi</span> &nbsp;·&nbsp; Angular 19 + .NET Core 6 &nbsp;·&nbsp; Hyderabad, India</p>
  <p style="font-size:.75rem;color:#475569;margin-top:4px">© {{ year }} All rights reserved.</p>
</footer>`,
  styles: [`
.section { padding: 90px 2rem; }
.container { max-width: 1100px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 3.5rem; }
.section-tag { font-family: 'Fira Code', monospace; font-size: .75rem; color: #3b82f6; background: rgba(59,130,246,.1); border: 1px solid rgba(59,130,246,.2); padding: 4px 14px; border-radius: 20px; display: inline-block; margin-bottom: .75rem; }
.section-title { font-size: clamp(1.6rem,3.5vw,2.2rem); font-weight: 700; background: linear-gradient(135deg,#3b82f6,#8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: .75rem; }
.section-divider { width: 50px; height: 3px; background: linear-gradient(135deg,#3b82f6,#8b5cf6); margin: 0 auto; border-radius: 2px; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
.contact-intro { font-size: .92rem; color: #94a3b8; line-height: 1.8; margin-bottom: 1.8rem; }
.contact-items { display: flex; flex-direction: column; gap: .8rem; }
.ci { display: flex; align-items: center; gap: .9rem; padding: .7rem 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); transition: .3s; color: #f8fafc; text-decoration: none; }
.ci:hover { border-color: rgba(59,130,246,.3); background: rgba(59,130,246,.05); }
.ci-ic { width: 38px; height: 38px; border-radius: 9px; background: rgba(59,130,246,.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #3b82f6; font-size: .8rem; font-weight: 700; }
.ci-lbl { font-size: .68rem; color: #64748b; text-transform: uppercase; letter-spacing: .05em; }
.ci-val { font-size: .83rem; color: #f8fafc; margin-top: 2px; }
.cform { background: rgba(30,41,59,0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.6rem; backdrop-filter: blur(10px); display: flex; flex-direction: column; gap: 1rem; }
.cform h3 { font-size: 1rem; font-weight: 600; color: #f8fafc; }
.fg { display: flex; flex-direction: column; gap: 5px; }
.fg label { font-size: .75rem; color: #94a3b8; font-weight: 500; }
.fg input, .fg textarea { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 10px; padding: .7rem 1rem; color: #f8fafc; font-family: 'Inter', sans-serif; font-size: .85rem; outline: none; transition: .2s; resize: vertical; width: 100%; }
.fg input:focus, .fg textarea:focus { border-color: rgba(59,130,246,.5); }
.fg input::placeholder, .fg textarea::placeholder { color: #475569; }
.submit-btn { width: 100%; padding: .8rem; border-radius: 10px; background: linear-gradient(135deg,#3b82f6,#8b5cf6); color: #fff; border: none; font-size: .88rem; font-weight: 500; cursor: pointer; transition: .3s; }
.submit-btn:hover { opacity: .88; }
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
`]
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;
  year = new Date().getFullYear();
  onSubmit() {
    this.submitted = true;
    setTimeout(() => { this.submitted = false; this.form = { name: '', email: '', message: '' }; }, 4000);
  }
}
