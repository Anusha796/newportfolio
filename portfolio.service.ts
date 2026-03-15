import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience, Project, SkillGroup, Certification, Stat } from './portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return of([
      { value: '3+', label: 'Years Experience' },
      { value: '2', label: 'Companies' },
      { value: '95%', label: 'On-time Delivery' },
      { value: '5+', label: 'Certifications' }
    ]);
  }

  getExperiences(): Observable<Experience[]> {
    return of([
      {
        role: 'Software Engineer',
        company: 'Infor (India) Pvt. Ltd.',
        period: 'May 2025 – Present',
        current: true,
        tags: ['C#', '.NET Framework', 'ASP.NET', 'SQL Server', 'SOA', 'Azure', 'REST/SOAP'],
        bullets: [
          'Working on Infor CloudSuite Portal (CSP) — multi-tenant SaaS platform for tenant provisioning, ERP lifecycle management & integration',
          'Implemented Repository, Factory & DTO patterns under SOA; optimised SQL queries improving performance by 25–30%',
          'Built REST/SOAP web services using JSON/XML; implemented log4net logging & exception-handling frameworks',
          'Cloud provisioning, config management & environment automation for continuous delivery'
        ]
      },
      {
        role: 'Associate II — Software Developer',
        company: 'Capgemini Technology Services',
        period: 'Jun 2024 – May 2025',
        current: false,
        tags: ['Angular', 'RESTful APIs', 'JWT', 'Jenkins', 'CI/CD', 'TypeScript'],
        bullets: [
          'Streamlined automated build & deployment pipelines, reducing manual deployment effort by 60%',
          'Developed RESTful Web APIs with JWT authentication; designed modular Angular components cutting bugs by 30%',
          'Tuned SQL queries & API integrations, reducing backend response time by 25–30%'
        ]
      },
      {
        role: 'Associate I — Software Developer',
        company: 'Capgemini Technology Services',
        period: 'Oct 2022 – Jun 2024',
        current: false,
        tags: ['ASP.NET', 'ADO.NET', 'C#', 'jQuery', 'JavaScript', 'SQL Server'],
        bullets: [
          'Developed web applications for Airbus A220 aircraft maintenance workflows using ASP.NET, ADO.NET & C#',
          'Optimised stored procedures & CTEs, reducing query execution time by ~25%',
          'Enhanced UI with HTML/CSS/JS/jQuery/AJAX — 20% reduction in UI-related support tickets',
          'Participated in Agile/Scrum sprints with 95% on-time user story delivery'
        ]
      }
    ]);
  }

  getProjects(): Observable<Project[]> {
    return of([
      {
        name: 'Infor CloudSuite Portal (CSP)',
        period: 'May 2025 – Present',
        description: 'Multi-tenant SaaS platform for tenant provisioning, environment lifecycle management & ERP integrations.',
        tags: ['C#', '.NET', 'SQL Server', 'SOA', 'REST/SOAP', 'Azure'],
        highlight: '30% backend response time reduction'
      },
      {
        name: 'Airbus A220 Tech Data',
        period: 'Jan 2023 – May 2025',
        description: 'Aircraft maintenance system with modular API design, authentication & analytics.',
        tags: ['ASP.NET', 'EF Core', 'SQL Server', 'Angular', 'C#'],
        highlight: '35% data retrieval improvement'
      },
      {
        name: 'Event Logistics & Scheduling',
        period: 'Oct – Dec 2022',
        description: 'Console application with RESTful APIs for event management. Azure CI/CD pipelines for reliable deployments.',
        tags: ['.NET Core', 'Azure', 'CI/CD', 'REST API'],
        highlight: '60% scheduling effort reduction'
      }
    ]);
  }

  getSkills(): Observable<SkillGroup[]> {
    return of([
      { category: 'Frontend', icon: 'web', skills: ['Angular 19', 'HTML5 / CSS3', 'TypeScript', 'JavaScript', 'Bootstrap', 'jQuery'] },
      { category: 'Backend', icon: 'dns', skills: ['C#', 'ASP.NET Core 6', 'ASP.NET MVC', 'RESTful APIs', 'Entity Framework Core', 'ADO.NET'] },
      { category: 'Database & Cloud', icon: 'cloud', skills: ['SQL Server', 'Azure App Services', 'Azure Blob Storage', 'Cloud Computing', 'CI/CD Pipelines'] },
      { category: 'Tools & Practices', icon: 'build', skills: ['Git / GitHub', 'Jenkins', 'Postman', 'Agile / Scrum', 'Visual Studio Code', 'Putty'] }
    ]);
  }

  getCertifications(): Observable<Certification[]> {
    return of([
      { title: 'Azure AI Fundamentals', issuer: 'Microsoft Certified' },
      { title: 'Full Stack Developer', issuer: 'Edureka Internship' },
      { title: '.NET 8, ASP.NET Core & Azure AI Fundamentals', issuer: 'Capgemini' },
      { title: '.NET Core Certification', issuer: 'Udemy' },
      { title: 'Artificial Intelligence Real-Time Project', issuer: 'Unschool' }
    ]);
  }
}
