import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALaUne } from './a-la-une';

describe('ALaUne', () => {
  let component: ALaUne;
  let fixture: ComponentFixture<ALaUne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALaUne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALaUne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
