import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, inject } from '@angular/core';

@Directive({
  selector: 'a[appSmoothScroll]',
  standalone: true,
})
export class SmoothScrollDirective {
  private readonly document = inject(DOCUMENT);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (!href?.startsWith('#')) {
      return;
    }

    const target = this.document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
