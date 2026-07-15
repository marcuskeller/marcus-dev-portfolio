import { TestBed } from '@angular/core/testing';
import { Projects } from './projects';
import { LightboxService } from '../../shared/services/lightbox.service';
import { PROJECTS } from './projects.data';

describe('Projects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [Projects] });
  });

  it('exposes every project from PROJECTS', () => {
    const fixture = TestBed.createComponent(Projects);

    expect(fixture.componentInstance['projects']).toBe(PROJECTS);
  });

  it('opens the lightbox with the project image and a composed alt text', () => {
    const fixture = TestBed.createComponent(Projects);
    const lightbox = TestBed.inject(LightboxService);
    const project = PROJECTS.find((p) => p.image)!;

    fixture.componentInstance.openImage(project);

    expect(lightbox.image()).toEqual({
      src: project.image,
      alt: `${project.name} — captura de tela do projeto`,
    });
  });

  it('does nothing when the project has no image', () => {
    const fixture = TestBed.createComponent(Projects);
    const lightbox = TestBed.inject(LightboxService);
    const project = PROJECTS.find((p) => !p.image)!;

    fixture.componentInstance.openImage(project);

    expect(lightbox.image()).toBeNull();
  });
});
