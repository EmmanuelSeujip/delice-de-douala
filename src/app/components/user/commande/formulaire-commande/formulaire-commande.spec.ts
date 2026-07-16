import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCommande } from './formulaire-commande';

describe('FormulaireCommande', () => {
  let component: FormulaireCommande;
  let fixture: ComponentFixture<FormulaireCommande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireCommande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCommande);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
