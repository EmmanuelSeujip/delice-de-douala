import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatCardCommande } from './plat-card-commande';

describe('PlatCardCommande', () => {
  let component: PlatCardCommande;
  let fixture: ComponentFixture<PlatCardCommande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatCardCommande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatCardCommande);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
