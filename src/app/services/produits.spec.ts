import { TestBed } from '@angular/core/testing';
import { ProduitsService } from './produits';

describe('Produits', () => {
  let service: ProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
