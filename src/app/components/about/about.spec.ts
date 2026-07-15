import { TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  it('creates', () => {
    TestBed.configureTestingModule({ imports: [About] });
    const fixture = TestBed.createComponent(About);

    expect(fixture.componentInstance).toBeTruthy();
  });
});
