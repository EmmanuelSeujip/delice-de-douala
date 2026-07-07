import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAdmin } from './template-admin';

describe('TemplateAdmin', () => {
  let component: TemplateAdmin;
  let fixture: ComponentFixture<TemplateAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
