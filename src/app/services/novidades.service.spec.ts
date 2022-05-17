import { TestBed } from '@angular/core/testing';

import { NovidadesService } from './novidades.service';

describe('NovidadesService', () => {
  let service: NovidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
