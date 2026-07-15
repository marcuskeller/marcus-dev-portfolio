import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `<div appScrollReveal></div>`,
})
class HostComponent {}

describe('ScrollRevealDirective', () => {
  it('reveals the element immediately when IntersectionObserver is unavailable', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement.querySelector('div');

    expect(el.classList.contains('opacity-100')).toBe(true);
    expect(el.classList.contains('translate-y-0')).toBe(true);
    expect(el.classList.contains('opacity-0')).toBe(false);
  });
});
