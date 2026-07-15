import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CountUpDirective } from './count-up.directive';

@Component({
  standalone: true,
  imports: [CountUpDirective],
  template: `<span [appCountUp]="value"></span>`,
})
class HostComponent {
  value = '12+';
}

describe('CountUpDirective', () => {
  it('sets the raw value immediately when IntersectionObserver is unavailable', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(el.textContent).toBe('12+');
  });

  it('falls back to the raw value when it has no numeric prefix', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.value = 'N/A';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(el.textContent).toBe('N/A');
  });
});
