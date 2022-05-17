import { TestBed } from '@angular/core/testing';

import { Promocoes1Service } from './promocoes1.service';

describe('Promocoes1Service', () => {
  let service: Promocoes1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Promocoes1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
