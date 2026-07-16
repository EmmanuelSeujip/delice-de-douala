import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierNavigation } from './panier-navigation';

describe('PanierNavigation', () => {
  let component: PanierNavigation;
  let fixture: ComponentFixture<PanierNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
