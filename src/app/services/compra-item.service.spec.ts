import { TestBed } from '@angular/core/testing';

import { CompraItemService } from './compra-item.service';

describe('CompraItemService', () => {
  let service: CompraItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
