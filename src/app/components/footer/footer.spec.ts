import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  it('exposes the current year', () => {
    TestBed.configureTestingModule({ imports: [Footer] });
    const fixture = TestBed.createComponent(Footer);

    expect(fixture.componentInstance['year']).toBe(new Date().getFullYear());
  });
});
