import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsView } from './plats-view';

describe('PlatsView', () => {
  let component: PlatsView;
  let fixture: ComponentFixture<PlatsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatsView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
