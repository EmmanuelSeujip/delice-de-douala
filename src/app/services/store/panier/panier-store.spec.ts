import { TestBed } from '@angular/core/testing';

import { PanierStore } from './panier-store';

describe('PanierStore', () => {
  let service: PanierStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
