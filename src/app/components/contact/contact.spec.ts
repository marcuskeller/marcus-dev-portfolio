import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [Contact] });
  });

  it('embeds a pre-filled message in the WhatsApp link', () => {
    const fixture = TestBed.createComponent(Contact);
    const whatsappUrl = fixture.componentInstance['whatsappUrl'];

    expect(whatsappUrl).toContain('wa.me/5547992629270');
    expect(whatsappUrl).toContain('text=');
  });
});
