import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsList } from './plats-list';

describe('PlatsList', () => {
  let component: PlatsList;
  let fixture: ComponentFixture<PlatsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
