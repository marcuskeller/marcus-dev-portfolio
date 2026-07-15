import { TestBed } from '@angular/core/testing';
import { Education } from './education';
import { EDUCATION } from './education.data';

describe('Education', () => {
  it('exposes every education entry from EDUCATION', () => {
    TestBed.configureTestingModule({ imports: [Education] });
    const fixture = TestBed.createComponent(Education);

    expect(fixture.componentInstance['education']).toBe(EDUCATION);
  });
});
