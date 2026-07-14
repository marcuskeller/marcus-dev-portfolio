import { Component } from '@angular/core';
import { Briefcase } from 'lucide-angular';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { Timeline } from '../../shared/timeline/timeline';
import { EXPERIENCE_CURRENT_LABEL, EXPERIENCES } from './experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TitleRevealDirective, Timeline],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
  protected readonly currentLabel = EXPERIENCE_CURRENT_LABEL;

  protected readonly BriefcaseIcon = Briefcase;
}
