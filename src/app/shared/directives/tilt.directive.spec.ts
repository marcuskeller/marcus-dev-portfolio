import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TiltDirective } from './tilt.directive';

@Component({
  standalone: true,
  imports: [TiltDirective],
  template: `<div appTilt></div>`,
})
class HostComponent {}

describe('TiltDirective', () => {
  it('applies a rotation transform on mousemove based on cursor position', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');
    el.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 100, height: 100 }) as DOMRect;

    el.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 0 }));

    expect(el.style.transform).toContain('perspective(700px)');
    expect(el.style.transform).toContain('translateY(-4px)');
  });

  it('resets the transform on mouseleave', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');

    el.dispatchEvent(new MouseEvent('mouseleave'));

    expect(el.style.transform).toBe(
      'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)',
    );
  });
});
