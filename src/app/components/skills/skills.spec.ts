import { TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [Skills] });
  });

  it('groups skills into the 6 expected categories, in a fixed order', () => {
    const fixture = TestBed.createComponent(Skills);
    const groups = fixture.componentInstance['skillGroups'];

    expect(groups.map((group) => group.category)).toEqual([
      'Backend',
      'Frontend',
      'Cloud & DevOps',
      'Práticas & Arquitetura',
      'Testes',
      'Ferramentas',
    ]);
  });

  it('assigns every skill to a group matching its own category', () => {
    const fixture = TestBed.createComponent(Skills);
    const groups = fixture.componentInstance['skillGroups'];

    for (const group of groups) {
      for (const skill of group.skills) {
        expect(skill.category).toBe(group.category);
      }
    }
  });
});
