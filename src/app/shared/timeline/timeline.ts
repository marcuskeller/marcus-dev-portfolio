import { Component, input } from '@angular/core';
import { CircleCheck, LucideAngularModule, LucideIconData, MapPin } from 'lucide-angular';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ScrollRevealDirective, LucideAngularModule],
  templateUrl: './timeline.html',
})
export class Timeline {
  readonly items = input.required<readonly Experience[]>();
  readonly icon = input.required<LucideIconData>();
  readonly dateOngoingLabel = input.required<string>();
  readonly ongoingBadgeLabel = input.required<string>();
  readonly completedBadgeLabel = input<string>();

  protected readonly MapPinIcon = MapPin;
  protected readonly CheckIcon = CircleCheck;
}
