import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './portfolio.service';
import { Experience } from './portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  constructor(private svc: PortfolioService) {}
  ngOnInit() { this.svc.getExperiences().subscribe(e => this.experiences = e); }
}
