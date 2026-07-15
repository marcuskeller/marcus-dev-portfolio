import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SmoothScrollDirective } from './smooth-scroll.directive';

@Component({
  standalone: true,
  imports: [SmoothScrollDirective],
  template: `
    <a href="#target" appSmoothScroll>Go</a>
    <a href="https://example.com" appSmoothScroll>External</a>
    <div id="target"></div>
  `,
})
class HostComponent {}

describe('SmoothScrollDirective', () => {
  it('smooth-scrolls to the matching in-page target and prevents default navigation', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[href="#target"]');
    const target: HTMLElement = fixture.nativeElement.querySelector('#target');
    target.scrollIntoView = vi.fn();

    const event = new MouseEvent('click', { cancelable: true });
    link.dispatchEvent(event);

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(event.defaultPrevented).toBe(true);
  });

  it('ignores links that are not in-page anchors', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector(
      'a[href="https://example.com"]',
    );
    const event = new MouseEvent('click', { cancelable: true });
    link.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
  });
});
