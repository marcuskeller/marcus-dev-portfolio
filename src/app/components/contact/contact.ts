import { Component } from '@angular/core';
import { LucideAngularModule, Mail } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { BrandIcon } from '../../shared/icons/brand-icon';

const WHATSAPP_MESSAGE = $localize`:@@contact.whatsappMessage:Olá, Marcus! Vi seu portfólio e gostaria de falar com você.`;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective, TitleRevealDirective, LucideAngularModule, BrandIcon],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly whatsappUrl = `https://wa.me/5547992629270?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  protected readonly MailIcon = Mail;
}
