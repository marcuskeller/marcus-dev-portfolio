import { Component } from '@angular/core';
import { GraduationCap } from 'lucide-angular';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { Timeline } from '../../shared/timeline/timeline';
import {
  EDUCATION,
  EDUCATION_COMPLETED_LABEL,
  EDUCATION_CURRENT_LABEL,
  EDUCATION_IN_PROGRESS_LABEL,
} from './education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TitleRevealDirective, Timeline],
  templateUrl: './education.html',
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly currentLabel = EDUCATION_CURRENT_LABEL;
  protected readonly inProgressLabel = EDUCATION_IN_PROGRESS_LABEL;
  protected readonly completedLabel = EDUCATION_COMPLETED_LABEL;
  protected readonly GraduationCapIcon = GraduationCap;
}
