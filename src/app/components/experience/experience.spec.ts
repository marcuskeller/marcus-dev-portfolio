import { TestBed } from '@angular/core/testing';
import { Experience } from './experience';
import { EXPERIENCES } from './experience.data';

describe('Experience', () => {
  it('exposes every experience entry from EXPERIENCES', () => {
    TestBed.configureTestingModule({ imports: [Experience] });
    const fixture = TestBed.createComponent(Experience);

    expect(fixture.componentInstance['experiences']).toBe(EXPERIENCES);
  });
});
