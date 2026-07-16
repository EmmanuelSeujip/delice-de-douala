import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatListCommande } from './plat-list-commande';

describe('PlatListCommande', () => {
  let component: PlatListCommande;
  let fixture: ComponentFixture<PlatListCommande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatListCommande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatListCommande);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
