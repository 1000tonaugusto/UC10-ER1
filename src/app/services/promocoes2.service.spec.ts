import { TestBed } from '@angular/core/testing';

import { Promocoes2Service } from './promocoes2.service';

describe('Promocoes2Service', () => {
  let service: Promocoes2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Promocoes2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
