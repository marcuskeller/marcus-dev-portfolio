import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { PROJECTS } from '../projects/projects.data';
import { SKILLS } from '../skills/skills.data';

describe('Hero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [Hero] });
  });

  it('derives the projects and tech counters from the source data', () => {
    const fixture = TestBed.createComponent(Hero);

    expect(fixture.componentInstance['projectsCount']).toBe(`${PROJECTS.length}+`);
    expect(fixture.componentInstance['techCount']).toBe(`${SKILLS.length}+`);
  });
});
