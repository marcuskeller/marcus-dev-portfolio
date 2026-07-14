import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ArrowRight, Download, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { SmoothScrollDirective } from '../../shared/directives/smooth-scroll.directive';
import { PROJECTS } from '../projects/projects.data';
import { SKILLS } from '../skills/skills.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ScrollRevealDirective,
    CountUpDirective,
    SmoothScrollDirective,
    LucideAngularModule,
    NgOptimizedImage,
  ],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly projectsCount = `${PROJECTS.length}+`;
  protected readonly techCount = `${SKILLS.length}+`;

  protected readonly ArrowRightIcon = ArrowRight;
  protected readonly DownloadIcon = Download;
}
