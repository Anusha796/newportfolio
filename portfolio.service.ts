// src/app/services/portfolio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience, Project, SkillGroup, Certification, Stat } from '../models/portfolio.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Falls back to local data if API unavailable
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
          'Implemented Repository, Factory & DTO patterns under SOA; optimised SQL queries & stored procedures improving data processing performance by 25–30%',
          'Built REST/SOAP web services using JSON/XML for inter-module communication and third-party integrations',
          'Implemented log4net-based logging & exception-handling frameworks to enhance system reliability and traceability',
          'Cloud provisioning, config management & environment automation supporting continuous delivery and multi-tenant scalability'
        ]
      },
      {
        role: 'Associate II — Software Developer',
        company: 'Capgemini Technology Services',
        period: 'Jun 2024 – May 2025',
        current: false,
        tags: ['Angular', 'RESTful APIs', 'JWT', 'Jenkins', 'CI/CD', 'TypeScript'],
        bullets: [
          'Streamlined automated build & deployment pipelines across dev, staging & production — reducing manual deployment effort by 60%',
          'Developed RESTful Web APIs with JWT authentication, significantly improving access security and reducing incidents',
          'Designed modular Angular components with routing & reactive forms, cutting front-end bugs by 30% in new modules',
          'Tuned SQL queries & improved API integration, reducing backend response time by 25–30%'
        ]
      },
      {
        role: 'Associate I — Software Developer',
        company: 'Capgemini Technology Services',
        period: 'Oct 2022 – Jun 2024',
        current: false,
        tags: ['ASP.NET', 'ADO.NET', 'C#', 'jQuery', 'JavaScript', 'SQL Server'],
        bullets: [
          'Developed web applications supporting aircraft maintenance workflows (Airbus A220) using ASP.NET, ADO.NET & C#',
          'Implemented form authentication, user controls & state management — reducing form-level bugs by 15–20%',
          'Enhanced UI interactivity with HTML/CSS/JS/jQuery/AJAX, achieving a 20% reduction in UI-related support tickets',
          'Optimised backend logic with stored procedures & CTEs, reducing query execution time by ~25%',
          'Participated in Agile/Scrum sprints with 95% on-time user story delivery rate'
        ]
      }
    ]);
  }

  getProjects(): Observable<Project[]> {
    return of([
      {
        name: 'Infor CloudSuite Portal (CSP)',
        period: 'May 2025 – Present',
        description: 'Multi-tenant SaaS platform for tenant provisioning, environment lifecycle management & ERP system integrations. Automated provisioning and data refresh workflows using message queuing components.',
        tags: ['C#', '.NET', 'SQL Server', 'SOA', 'REST/SOAP', 'JSON/XML', 'Azure'],
        highlight: '30% backend response time reduction'
      },
      {
        name: 'Airbus A220 Tech Data',
        period: 'Jan 2023 – May 2025',
        description: 'Aircraft maintenance system with modular API design, authentication & analytics features. Enhanced Entity Framework Core queries & database indexing for improved performance.',
        tags: ['ASP.NET', 'EF Core', 'SQL Server', 'Angular', 'C#'],
        highlight: '35% data retrieval improvement'
      },
      {
        name: 'Event Logistics & Scheduling',
        period: 'Oct – Dec 2022',
        description: 'Console application with RESTful APIs for event management — automating workflows and reducing manual scheduling efforts. Azure CI/CD pipelines for reliable deployments.',
        tags: ['.NET Core', 'Azure', 'CI/CD', 'REST API', 'C#'],
        highlight: '60% scheduling effort reduction'
      }
    ]);
  }

  getSkills(): Observable<SkillGroup[]> {
    return of([
      {
        category: 'Frontend',
        icon: 'web',
        skills: ['Angular 19', 'HTML5 / CSS3', 'TypeScript', 'JavaScript', 'Bootstrap', 'jQuery']
      },
      {
        category: 'Backend',
        icon: 'dns',
        skills: ['C#', 'ASP.NET Core 6', 'ASP.NET MVC', 'RESTful APIs', 'Entity Framework Core', 'ADO.NET']
      },
      {
        category: 'Database & Cloud',
        icon: 'cloud',
        skills: ['SQL Server', 'Azure App Services', 'Azure Blob Storage', 'Cloud Computing', 'CI/CD Pipelines']
      },
      {
        category: 'Tools & Practices',
        icon: 'build',
        skills: ['Git / GitHub', 'Jenkins', 'Postman', 'Agile / Scrum', 'Visual Studio Code', 'Putty']
      }
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
