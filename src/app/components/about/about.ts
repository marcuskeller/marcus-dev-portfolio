import { Component } from '@angular/core';
import { Languages, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, TitleRevealDirective, LucideAngularModule],
  templateUrl: './about.html',
})
export class About {
  protected readonly LanguagesIcon = Languages;
}
