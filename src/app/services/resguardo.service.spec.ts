import { TestBed } from '@angular/core/testing';

import { ResguardoService } from './resguardo.service';

describe('ResguardoService', () => {
  let service: ResguardoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResguardoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
