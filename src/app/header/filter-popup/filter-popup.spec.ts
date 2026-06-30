import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPopup } from './filter-popup';

describe('FilterPopup', () => {
  let component: FilterPopup;
  let fixture: ComponentFixture<FilterPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
